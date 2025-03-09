import type { SVGProps } from "react";

const SvgPinAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 15V8.5m0 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    />
  </svg>
);
export default SvgPinAltOutline;
