import type { SVGProps } from "react";

const SvgHdScreenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2 13.5h11m-5.5-3V14m6.69-2.589a24.35 24.35 0 0 0-13.38 0 .243.243 0 0 1-.31-.234V1.823c0-.162.155-.279.31-.234a24.35 24.35 0 0 0 13.38 0 .243.243 0 0 1 .31.234v9.354a.243.243 0 0 1-.31.234Z'
    />
  </svg>
);
export default SvgHdScreenOutline;
