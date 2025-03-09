import type { SVGProps } from "react";

const SvgTopLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h6v1H2.707l11.147 11.146-.708.708L2 2.707V7H1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTopLeftSolid;
