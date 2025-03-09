import type { SVGProps } from "react";

const SvgWebpackOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1.5 10.5v-6m0 6 6 3.5m-6-3.5L5 9M1.5 4.5l6-3.5m-6 3.5 6 3m0-6.5 6 3.5M7.5 1v3.5m6 0v6m0-6-6 3m6 3-6 3.5m6-3.5L10 9m-2.5 5V7.5m0-3L5 6v3m2.5-4.5L10 6v3M5 9l2.5 1.5L10 9'
    />
  </svg>
);
export default SvgWebpackOutline;
