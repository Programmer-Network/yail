import type { SVGProps } from "react";

const SvgBarChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M0 14.5h15M5.5 12V6m4 6V3m4 9V0m-12 9v3' />
  </svg>
);
export default SvgBarChartOutline;
