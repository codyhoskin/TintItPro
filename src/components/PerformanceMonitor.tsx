"use client";

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const logPerformanceMetrics = () => {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1];
        console.log('FCP:', fcp.startTime);
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        console.log('LCP:', lcp.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value;
          }
        }
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
      }

      // Resource loading times
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      if (slowResources.length > 0) {
        console.log('Slow resources:', slowResources.map(r => ({
          name: r.name,
          duration: r.duration,
          size: (r as PerformanceEntry & { transferSize: number }).transferSize
        })));
      }
    };

    // Log metrics after page load
    if (document.readyState === 'complete') {
      logPerformanceMetrics();
    } else {
      window.addEventListener('load', logPerformanceMetrics);
    }

    return () => {
      window.removeEventListener('load', logPerformanceMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
