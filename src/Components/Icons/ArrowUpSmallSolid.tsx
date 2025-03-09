import type { SVGProps } from "react";

const SvgArrowUpSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 3.793 10.207 6.5l-.707.707-1.5-1.5V11H7V5.707l-1.5 1.5-.707-.707z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowUpSmallSolid;
