import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@components/Topbar';
import Menu from '@components/Menu';
import LoadingSpinner from '@components/LoadingSpinner';
import { useMyData } from '@components/ScrollData';

const Layout = ({ showTopbar, startPage }) => {
  const { setData } = useMyData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clipPathOpen, setClipPathOpen] = useState('');
  const [pageLoad, setPageLoad] = useState(false);
  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollContainerRef.current.scrollTop;
    setData(scrollTop);

    if (scrollTop > lastScrollTop.current) {
      setShowTopBarScrolling(false);
    } else if (scrollTop < lastScrollTop.current) {
      setShowTopBarScrolling(true);
    }
    lastScrollTop.current = scrollTop;
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setPageLoad(startPage);
  }, [startPage]);

  useEffect(() => {
    console.log('page ', pageLoad)
    if (pageLoad === 'error') {
      setClipPathOpen('clip-path-removed');
      setShowTopBarScrolling(false);
    } else if (pageLoad === true) {
      setClipPathOpen('');

      setTimeout(() => {
        setClipPathOpen('open');
        setShowTopBarScrolling(false);

        setTimeout(() => {
          setClipPathOpen('clip-path-removed');
          setShowTopBarScrolling(true);
        }, 2500);
      }, 400);
    }
  }, [pageLoad]);

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
      {(pageLoad !== true && pageLoad !== 'error') && <LoadingSpinner />}

      <div ref={scrollContainerRef} className={`container-web ${clipPathOpen}`}>
        {showTopbar && pageLoad && pageLoad !== 'error' && (
          <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />
        )}
        <Menu isMenuOpen={isMenuOpen} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
