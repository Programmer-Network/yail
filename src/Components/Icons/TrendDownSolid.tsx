import type { SVGProps } from "react";

const SvgTrendDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m.146 3.854.708-.708L5 7.293l3-3 6 6V5h1v7H8v-1h5.293L8 5.707l-3 3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrendDownSolid;
