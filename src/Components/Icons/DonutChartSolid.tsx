import type { SVGProps } from "react";

const SvgDonutChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 7.5A7.5 7.5 0 0 1 7 .016v4.02a3.5 3.5 0 1 0 2.596 6.267l2.842 2.842A7.5 7.5 0 0 1 0 7.5'
    />
    <path
      fill='currentColor'
      d='M13.145 12.438A7.47 7.47 0 0 0 15 7.5c0-1.034-.21-2.018-.587-2.914L10.755 6.21c.158.4.245.834.245 1.289 0 .786-.26 1.512-.697 2.096zM8 4.035V.016a7.5 7.5 0 0 1 5.963 3.676L10.254 5.34A3.5 3.5 0 0 0 8 4.035'
    />
  </svg>
);
export default SvgDonutChartSolid;
