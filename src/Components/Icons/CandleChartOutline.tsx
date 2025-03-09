import type { SVGProps } from "react";

const SvgCandleChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 0v14.5H15M8.5 0v3.5m-5 6V12m0-8v1.5m10-1.5v2.5m0 4V13m-11-7.5h2v4h-2zm5-2h2v4h-2zm5 3h2v4h-2z'
    />
  </svg>
);
export default SvgCandleChartOutline;
