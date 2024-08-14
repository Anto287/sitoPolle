import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@components/Topbar';
import { useMyData } from '@components/ScrollData';

const Layout = ({ showTopbar  }) => {
  const { data, setData } = useMyData();

  const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);
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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div ref={scrollContainerRef} className='container-web'>
        {showTopbar  && <Topbar showTopBarScrolling={showTopBarScrolling} />}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
