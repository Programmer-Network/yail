import { DependencyList, useEffect } from "react";

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps: DependencyList
): void {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn();
    }, waitTime);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, waitTime, ...deps]);
}
