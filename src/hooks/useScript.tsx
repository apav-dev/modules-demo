import { useEffect, useState } from "react";

export const useScript = (src: string) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useScript");
    // Check if the script is already loaded
    const scriptExists = document.querySelector(`script[src="${src}"]`);
    if (scriptExists) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    // script.type = "module";

    script.onload = () => {
      console.log(`Script loaded: ${src}`);
      setLoaded(true);
    };

    script.onerror = (error) => {
      console.error(`Script failed to load: ${src}`, error);
      setError(error.toString());
    };

    document.body.appendChild(script);

    // Cleanup function to remove script tag on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return { loaded, error };
};
