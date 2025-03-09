import type { SVGProps } from "react";

const SvgCalculatorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4 4.5h7m-7 4h1m2 0h1m2 0h1m-7 3h1m2 0h1m2 0h1m-8.5 3h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z'
    />
  </svg>
);
export default SvgCalculatorOutline;
