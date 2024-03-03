import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleMediaChange = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    handleMediaChange(); // Initial check

    const listener = () => handleMediaChange();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
