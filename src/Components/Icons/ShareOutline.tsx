import type { SVGProps } from "react";

const SvgShareOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M4.5 7.5h4M11 4 8.5 7.495 11 11m3.5-8.501a2 2 0 0 1-4 0 2 2 0 0 1 4 0Zm0 9.993a2 2 0 0 1-4 0 2 2 0 0 1 4 0Zm-10-4.997a2 2 0 0 1-4 0 2 2 0 0 1 4 0Z'
    />
  </svg>
);
export default SvgShareOutline;
