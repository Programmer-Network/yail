import type { SVGProps } from "react";

const SvgLayersDifferenceOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 4.5v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3m-6-6h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3m-6-6V7m0-2.5H7m3.5 6H8m2.5 0V8M8 4.5h2.5V7m-6 1v2.5H7'
    />
  </svg>
);
export default SvgLayersDifferenceOutline;
