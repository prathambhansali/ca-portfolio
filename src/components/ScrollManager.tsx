'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset scroll to top on every fresh load/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Handle Hash Cleanup
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        // Wait for the smooth scroll to finish or at least land
        setTimeout(() => {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }, 1000); // 1s delay to allow scroll to complete
      }
    };

    // Listen for clicks on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        // If it's an internal hash link, trigger the cleanup
        handleHashChange();
      }
    };

    window.addEventListener('popstate', handleHashChange);
    document.addEventListener('click', handleAnchorClick);

    // Check on initial mount in case there's a hash
    handleHashChange();

    return () => {
      window.removeEventListener('popstate', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname, searchParams]);

  return null;
}
