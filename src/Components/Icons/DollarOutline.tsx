import type { SVGProps } from "react";

const SvgDollarOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 10.5a3 3 0 0 0 3 3h4a3 3 0 1 0 0-6h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 3 3M7.5 0v1.5m0 13.5v-1.5'
    />
  </svg>
);
export default SvgDollarOutline;
