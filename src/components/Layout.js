import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Topbar from '@components/Topbar';
import Menu from '@components/Menu';
import { useMyData } from '@components/ScrollData';
import { gsap } from 'gsap';

const Layout = ({ showTopbar }) => {
  const { data, setData } = useMyData();

  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);
  const pageRef = useRef(null);
  const location = useLocation();

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

  const animatePageTransition = () => {
    const tl = gsap.timeline();

    tl.to(pageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.to(pageRef.current, { opacity: 1, duration: 0.5 });
      }
    });
  };

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
    animatePageTransition();
  }, [location]);

  return (
    <>
      <div ref={scrollContainerRef} className='container-web'>
        {showTopbar && (
          <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />
        )}
        <Menu isMenuOpen={isMenuOpen} />
        <div ref={pageRef} style={{ opacity: 1 }}> 
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
