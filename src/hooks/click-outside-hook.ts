import { useState, useEffect, useRef } from "react";
const useComponentVisible = (initialIsVisible: boolean | undefined) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref: any = useRef(null);
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, isComponentVisible, setIsComponentVisible };
};
export default useComponentVisible;
