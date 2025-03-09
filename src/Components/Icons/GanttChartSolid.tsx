import type { SVGProps } from "react";

const SvgGanttChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 0h1v14h14v1H0zm2 2h3v1H2zm1 3h5v1H3zm2 3h3v1H5zm3 3h7v1H8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGanttChartSolid;
