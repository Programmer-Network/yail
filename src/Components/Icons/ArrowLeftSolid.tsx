import type { SVGProps } from "react";

const SvgArrowLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m2.707 8 3.147 3.146-.708.707L.793 7.5l4.353-4.354.708.708L2.707 7H14v1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowLeftSolid;
