import type { SVGProps } from "react";

const SvgSearchCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M7 4a3 3 0 1 0 1.738 5.445l1.409 1.409.707-.707-1.409-1.409A3 3 0 0 0 7 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSearchCircleSolid;
