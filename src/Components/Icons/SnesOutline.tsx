import type { SVGProps } from "react";

const SvgSnesOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 7v3M2 8.5h3m6 0h1m-1-2h1m-3 2h1m-1-2h1m-8.5-3h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgSnesOutline;
