import React, { useState } from 'react';
import '@styles/ImgLoaderStyle.css';

const ImgLoader = ({ 
  src, 
  alt, 
  style = {}, 
  styleImg = {},
  styleTextError = {},
  containerClass = 'img-container-default', 
  imgClass = '', 
  title = '', 
  loading = 'lazy', 
  srcset = ['', '', ''],
  sizes = ['', '', ''],
  types = ['', '', ''],
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const computedStyleImg = {
    ...styleImg,
    display: error ? 'none' : 'block',
  };

  return (
    <div 
      className={`image-container ${loaded ? 'loaded' : ''} ${containerClass}`} 
      style={style}
    >
      <picture>
        <source srcSet={srcset[0]} sizes={sizes[0]} type={types[0]} />
        <source srcSet={srcset[1]} sizes={sizes[1]} type={types[1]} />
        <source srcSet={srcset[2]} sizes={sizes[2]} type={types[2]} />
        <img 
          src={src} 
          alt={alt} 
          title={title}
          loading={loading}
          onLoad={() => setLoaded(true)} 
          onError={() => setError(true)}
          style={computedStyleImg}
          className={`${imgClass}`}
        />
      </picture>
      {(!loaded || error) && (
        <div 
          className={`fallback ${error ? 'error' : ''}`} 
          style={styleTextError} 
          title={alt || ''}
        >
          {error && <p>{alt || ''}</p>}
        </div>
      )}
    </div>
  );
};

export default ImgLoader;
