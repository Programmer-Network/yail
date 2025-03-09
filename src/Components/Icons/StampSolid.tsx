import type { SVGProps } from "react";

const SvgStampSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 3.5a3.5 3.5 0 1 1 5 3.163V9h3.5a2.5 2.5 0 0 1 2.5 2.5V13H0v-1.5A2.5 2.5 0 0 1 2.5 9H6V6.663A3.5 3.5 0 0 1 4 3.5M0 14v1h15v-1z'
    />
  </svg>
);
export default SvgStampSolid;
