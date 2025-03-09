import type { SVGProps } from "react";

const SvgInfoSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 3.99V5H7V3.99zM6 11v-1h1V8H6V7h2v3h1v1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgInfoSmallSolid;
