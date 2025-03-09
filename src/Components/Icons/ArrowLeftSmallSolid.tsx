import type { SVGProps } from "react";

const SvgArrowLeftSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.207 5.5 5.707 7H11v1H5.707l1.5 1.5-.707.707L3.793 7.5 6.5 4.793z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowLeftSmallSolid;
