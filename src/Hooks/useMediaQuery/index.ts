import { useEffect, useState } from "react";

import { getMatches } from "./types";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }

    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export function useMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export default useMediaQuery;
