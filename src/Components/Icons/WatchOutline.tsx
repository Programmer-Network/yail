import type { SVGProps } from "react";

const SvgWatchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 3.5h6m-6 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m0-8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m0 0a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m0 0h-6m6 0v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2m9-5.5v3'
    />
  </svg>
);
export default SvgWatchOutline;
