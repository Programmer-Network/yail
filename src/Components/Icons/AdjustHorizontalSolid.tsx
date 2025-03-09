import type { SVGProps } from "react";

const SvgAdjustHorizontalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M9 0H6v2H0v1h6v2h3V3h6V2H9zM5 5H2v2H0v1h2v2h3V8h10V7H5zM13 10h-3v2H0v1h10v2h3v-2h2v-1h-2z'
    />
  </svg>
);
export default SvgAdjustHorizontalSolid;
