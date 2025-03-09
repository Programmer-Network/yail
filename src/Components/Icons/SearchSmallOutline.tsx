import type { SVGProps } from "react";

const SvgSearchSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m8.5 8.5 2 2M7 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z'
    />
  </svg>
);
export default SvgSearchSmallOutline;
