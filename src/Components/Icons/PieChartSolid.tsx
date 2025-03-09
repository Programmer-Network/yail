import type { SVGProps } from "react";

const SvgPieChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 .016a7.5 7.5 0 1 0 5.438 13.13L7.15 7.857A.5.5 0 0 1 7 7.5z'
    />
    <path
      fill='currentColor'
      d='M13.145 12.438A7.47 7.47 0 0 0 15 7.5a7.5 7.5 0 0 0-.581-2.9L8.344 7.637zM13.97 3.706A7.5 7.5 0 0 0 8 .016v6.675z'
    />
  </svg>
);
export default SvgPieChartSolid;
