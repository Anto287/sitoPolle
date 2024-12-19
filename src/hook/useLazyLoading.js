import { useEffect } from 'react';

const useLazyLoading = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src; // Aggiorna il src con il vero percorso
              img.removeAttribute('data-src'); // Rimuove l'attributo
            }
            observer.unobserve(img); // Ferma l'osservazione dell'immagine
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Inizia a caricare quando il 10% dell'immagine è visibile
      }
    );

    images.forEach((img) => observer.observe(img));

    // Cleanup per evitare memory leak
    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useLazyLoading;
