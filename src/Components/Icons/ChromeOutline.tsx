import type { SVGProps } from "react";

const SvgChromeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 5a.5.5 0 0 0 0-1zM2.964 2.814a.5.5 0 1 0-.928.372zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0 4h6V4h-6zM4.964 7.814l-2-5-.928.372 2 5zM9.25 9.301l-3.65 4.9.802.598 3.65-4.9zM7.5 10A2.5 2.5 0 0 1 5 7.5H4A3.5 3.5 0 0 0 7.5 11zM10 7.5A2.5 2.5 0 0 1 7.5 10v1A3.5 3.5 0 0 0 11 7.5zM7.5 5A2.5 2.5 0 0 1 10 7.5h1A3.5 3.5 0 0 0 7.5 4zm0-1A3.5 3.5 0 0 0 4 7.5h1A2.5 2.5 0 0 1 7.5 5z'
    />
  </svg>
);
export default SvgChromeOutline;
