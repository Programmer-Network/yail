import type { SVGProps } from "react";

const SvgDepthChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 0v14.5h14V0M.5 4.5h2v1h2v3h2v3h1v3-2h2v-2h2v-3h1v-2h2'
    />
  </svg>
);
export default SvgDepthChartOutline;
