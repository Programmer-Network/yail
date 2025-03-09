import type { SVGProps } from "react";

const SvgBracketSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14H5v1H3.5A2.5 2.5 0 0 1 1 12.5V8H0V7h1V2.5A2.5 2.5 0 0 1 3.5 0H5v1zM10 0h1.5A2.5 2.5 0 0 1 14 2.5V7h1v1h-1v4.5a2.5 2.5 0 0 1-2.5 2.5H10v-1h1.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 1H10z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBracketSolid;
