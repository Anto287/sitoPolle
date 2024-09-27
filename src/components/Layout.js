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
  const [showTopbarAfterAnimation, setShowTopbarAfterAnimation] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);
  const topbarRef = useRef(null); 

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
    if (!loadingAnimation) {
      const element = scrollContainerRef.current;

      gsap.set(element, {
        clipPath: 'circle(1% at 50% 50%)',
        willChange: 'clip-path',
      });

      gsap.to(element, {
        clipPath: 'circle(125% at 50% 50%)',
        delay: 0.4,
        duration: 2.0,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: () => {
          element.style.willChange = ''; 
          setShowTopbarAfterAnimation(true);
        }
      });

      gsap.ticker.fps(60);
    }
  }, [loadingAnimation]);

  useEffect(() => {
    if (!loadingAnimation) {
      const element = scrollContainerRef.current;
      const topbar = topbarRef.current;
  
      gsap.set(topbar, { top: '-100%', willChange: 'top' });
  
      gsap.set(element, {
        clipPath: 'circle(1% at 50% 50%)',
        willChange: 'clip-path',
      });
  
      gsap.to(element, {
        clipPath: 'circle(125% at 50% 50%)',
        delay: 0.4,
        duration: 2.0,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: () => {
          element.style.willChange = ''; 
        }
      });
  
      gsap.to(topbar, {
        top: '0%',
        delay: 1, 
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          topbar.style.willChange = '';
        }
      });
  
      gsap.ticker.fps(60);
    }
  }, [loadingAnimation]); 

  return (
    <>
      {loadingAnimation && <LoadingSpinner />}

      <div ref={scrollContainerRef} className="container-web">
        {showTopbar && pageLoad && <Topbar ref={topbarRef} showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />}
        <Menu isMenuOpen={isMenuOpen} />
        
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
