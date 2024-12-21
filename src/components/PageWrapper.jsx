import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '@hooks/useWindowSize';

const PageWrapper = ({ children, onAnimationComplete, startAnimated }) => {
  const { width } = useWindowSize();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <motion.div
      initial={{
        clipPath: width < 600
          ? 'inset(100% 0% 0% 0%)'
          : 'circle(0% at 50% 50%)',
      }}
      animate={{
        clipPath: startAnimation
          ? (width < 600
              ? 'inset(0% 0% 0% 0%)'
              : 'circle(150% at 50% 50%)')
          : (width < 600
              ? 'inset(100% 0% 0% 0%)'
              : 'circle(0% at 50% 50%)'),
      }}
      exit={{
        clipPath: width < 600
          ? 'inset(100% 0% 0% 0%)'
          : 'circle(0% at 50% 50%)',
      }}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'white',
        zIndex: 2,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;