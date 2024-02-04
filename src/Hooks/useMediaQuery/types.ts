export const getMatches = (query: string): boolean => {
  if (!window?.matchMedia) {
    return false;
  }

  return window.matchMedia(query).matches;
};
