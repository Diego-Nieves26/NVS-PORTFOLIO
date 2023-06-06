import { useEffect } from "react";

// ----------------------------------------------------------------------

export default function useToTop() {
  useEffect(() => {
    window.scroll({
      top: 1,
      behavior: "smooth",
    });
  }, []);
}
