import type { SVGProps } from "react";

const SvgTickCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4 7.5 7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgTickCircleOutline;
