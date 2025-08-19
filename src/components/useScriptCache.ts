import { useState, useEffect } from 'react';

interface UseScriptCacheOptions {
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  cacheKey?: string;
  cacheDuration?: number; // in milliseconds
}

export const useScriptCache = ({
  src,
  strategy = 'lazyOnload',
  cacheKey,
  cacheDuration = 24 * 60 * 60 * 1000 // 24 hours
}: UseScriptCacheOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if script is already cached
    if (cacheKey) {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { timestamp, loaded } = JSON.parse(cached);
        if (Date.now() - timestamp < cacheDuration && loaded) {
          setIsLoaded(true);
          return;
        }
      }
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    // Load script
    setIsLoading(true);
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.crossOrigin = 'anonymous';

    const handleLoad = () => {
      setIsLoaded(true);
      setIsLoading(false);

      // Cache the script load
      if (cacheKey) {
        localStorage.setItem(cacheKey, JSON.stringify({
          timestamp: Date.now(),
          loaded: true
        }));
      }
    };

    const handleError = () => {
      setError(new Error(`Failed to load script: ${src}`));
      setIsLoading(false);
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    // Add to DOM based on strategy
    if (strategy === 'beforeInteractive') {
      document.head.insertBefore(script, document.head.firstChild);
    } else if (strategy === 'afterInteractive') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          document.head.appendChild(script);
        });
      } else {
        document.head.appendChild(script);
      }
    } else {
      // lazyOnload
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          document.head.appendChild(script);
        });
      } else {
        setTimeout(() => {
          document.head.appendChild(script);
        }, 100);
      }
    }

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [src, strategy, cacheKey, cacheDuration]);

  return { isLoaded, isLoading, error };
};
