import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint.toString()}px)`;

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    function handler(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }

    setIsMobile(media.matches);

    media.addEventListener('change', handler);

    return () => {
      media.removeEventListener('change', handler);
    };
  }, [query]);

  return isMobile;
}
