import type { SVGProps } from "react";

const SvgCalculatorSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h10A1.5 1.5 0 0 1 14 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM4 5h7V4H4zm0 4h1V8H4zm4 0H7V8h1zm2 0h1V8h-1zm-5 3H4v-1h1zm2 0h1v-1H7zm4 0h-1v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCalculatorSolid;
