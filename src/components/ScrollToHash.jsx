// src/components/ScrollToHash.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g. #math), wait a tiny bit for the page to render, then scroll
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay ensures the DOM is painted before scrolling
    } 
    // If there is NO hash, scroll to the top of the new page
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}