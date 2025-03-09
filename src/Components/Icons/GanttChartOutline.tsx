import type { SVGProps } from "react";

const SvgGanttChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 0v14.5H15M5 2.5H2m6 3H3m5 3H5m10 3H8' />
  </svg>
);
export default SvgGanttChartOutline;
