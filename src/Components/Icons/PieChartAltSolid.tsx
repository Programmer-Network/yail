import type { SVGProps } from "react";

const SvgPieChartAltSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M6.5 0H6v9h9v-.5A8.5 8.5 0 0 0 6.5 0' />
    <path fill='currentColor' d='M12.826 10H5V2.174A6.5 6.5 0 1 0 12.826 10' />
  </svg>
);
export default SvgPieChartAltSolid;
