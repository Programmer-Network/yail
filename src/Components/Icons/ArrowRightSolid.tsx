import type { SVGProps } from "react";

const SvgArrowRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9.854 3.146 14.207 7.5l-4.353 4.354-.708-.708L12.293 8H1V7h11.293L9.146 3.854z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowRightSolid;
