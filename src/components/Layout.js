import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Topbar from '@components/Topbar';
import Menu from '@components/Menu';
import LoadingSpinner from '@components/LoadingSpinner';
import { useMyData } from '@components/ScrollData';
import gsap from 'gsap';

const Layout = ({ showTopbar, startPage }) => {
  const { t } = useTranslation();
  const { data, setData } = useMyData();

  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);  // container-web

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
      setLoadingAnimation(false);
    }
  }, [pageLoad]);

  useEffect(() => {
    if(!loadingAnimation){
      gsap.to(scrollContainerRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        delay: 0.4,
        duration: 2.5,
        ease: 'power2.inOut',
        force3D: true,
      });
    }
  }, [loadingAnimation]);

  return (
    <>
      {loadingAnimation && <LoadingSpinner />}
      
      <div ref={scrollContainerRef} className="container-web">
        {showTopbar && pageLoad && <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />}
        <Menu isMenuOpen={isMenuOpen} />
        
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
