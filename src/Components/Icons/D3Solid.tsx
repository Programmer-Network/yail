import type { SVGProps } from "react";

const SvgD3Solid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.5 2H0V1h1.5a6.5 6.5 0 0 1 0 13H0v-1h1.5a5.5 5.5 0 1 0 0-11m10 0H7V1h4.5a3.5 3.5 0 0 1 1.804 6.5A3.5 3.5 0 0 1 11.5 14H7v-1h4.5a2.5 2.5 0 0 0 0-5H9V7h2.5a2.5 2.5 0 0 0 0-5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgD3Solid;
