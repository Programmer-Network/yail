import type { SVGProps } from "react";

const SvgFloorplanOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10 .5h4.5v14H.5V.5h4l3 2m-1 12v-7M4 7.5h5m3 0h2.5'
    />
  </svg>
);
export default SvgFloorplanOutline;
