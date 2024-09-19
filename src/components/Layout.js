import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Topbar from '@components/Topbar';
import Menu from '@components/Menu';
import ImgLoader from '@components/ImgLoader';
import { useMyData } from '@components/ScrollData';
import gsap from 'gsap';
import myIcon from '@images/img_topbar/icon.webp';

const Layout = ({ showTopbar, startPage }) => {
  const { t } = useTranslation();
  const { data, setData } = useMyData();

  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);
  const coverRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollContainerRef.current.scrollTop;
    setData(lastScrollTop.current);

    if (scrollTop > lastScrollTop.current) {
      setShowTopBarScrolling(false);
    } else if (scrollTop < lastScrollTop.current && scrollTop > 0) {
      setShowTopBarScrolling(true);
    }

    lastScrollTop.current = scrollTop;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setPageLoad(startPage);
  }, [startPage]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (pageLoad) {
      gsap.to(coverRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => setLoadingAnimation(false),
      });
    }
  }, [pageLoad]);

  return (
    <>
      <div ref={scrollContainerRef} className="container-web">
        {showTopbar && pageLoad && <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />}
        <Menu isMenuOpen={isMenuOpen} />
        
        {loadingAnimation && (
          <div ref={coverRef} className="loading-cover">
            <ImgLoader 
              src={myIcon} 
              style={{minWidth: '40px', width: '40%', height: '90%'}} 
              styleImg={{width: 'auto', height: '100%'}}
              alt={t('THE_POLLE')}
            />
          </div>
        )}
        
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
