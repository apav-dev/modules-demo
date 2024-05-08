import { useEffect } from "react";

/**
 * Custom hook to dynamically load an external script.
 * @param {string} src - The source URL of the script to be loaded.
 */
const useOldSchoolWidget = (src: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]); // Re-run this effect if src changes
};

export default useOldSchoolWidget;
