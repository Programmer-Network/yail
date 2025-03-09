import type { SVGProps } from "react";

const SvgHexagonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M1.5 4.5v6l6 3.5 6-3.5v-6L7.5 1z' />
  </svg>
);
export default SvgHexagonOutline;
