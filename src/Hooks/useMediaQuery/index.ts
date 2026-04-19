import { useSyncExternalStore } from "react";

import { getMatches } from "./types";

function useMediaQuery(query: string) {
  const subscribe = (onChange: () => void) => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return () => {};
    }

    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener("change", onChange);
    return () => {
      matchMedia.removeEventListener("change", onChange);
    };
  };

  const getSnapshot = () => getMatches(query);
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export default useMediaQuery;
