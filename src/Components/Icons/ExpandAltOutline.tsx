import type { SVGProps } from "react";

const SvgExpandAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10 1.5h3.5m0 0V5m0-3.5-4 4m-8 4.5v3.5m0 0H5m-3.5 0 4-4'
    />
  </svg>
);
export default SvgExpandAltOutline;
