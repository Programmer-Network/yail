import type { SVGProps } from "react";

const SvgZoomOutOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m14.5 14.5-4-4M4 6.5h5m-2.5 6a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z'
    />
  </svg>
);
export default SvgZoomOutOutline;
