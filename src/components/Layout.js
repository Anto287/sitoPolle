import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@components/Topbar';
import Menu from '@components/Menu';
import { useMyData } from '@components/ScrollData';

const Layout = ({ showTopbar, startPage }) => {
  const { data, setData } = useMyData();

  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);

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
  },[startPage]);

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

  return (
    <>
      <div ref={scrollContainerRef} className="container-web">
        {showTopbar && pageLoad && <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />}
        <Menu isMenuOpen={isMenuOpen} />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
