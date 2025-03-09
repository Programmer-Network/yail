import type { SVGProps } from "react";

const SvgDepthChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1 0H0v15h15V0h-1v5h-2v2h-1v3H9v2H8v-1H7V8H5V5H3V4H1z'
    />
  </svg>
);
export default SvgDepthChartSolid;
