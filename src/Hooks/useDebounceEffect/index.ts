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
    // eslint-disable-next-line react-hooks/exhaustive-deps, @eslint-react/exhaustive-deps -- hook deliberately accepts caller-provided deps via spread, mirroring useEffect's signature
  }, [fn, waitTime, ...deps]);
}
