import type { SVGProps } from "react";

const SvgBorderRadiusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10 1.5h1m2 0h1m-1 3h1m-1 3h1m-1 3h1m-1 3h1m-4 0h1m-4 0h1m-4 0h1m-4 0h1m-1-3h1M1.5 8V5.5a4 4 0 0 1 4-4H8'
    />
  </svg>
);
export default SvgBorderRadiusOutline;
