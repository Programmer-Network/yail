import type { SVGProps } from "react";

const SvgArrowRightCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m8.5-2.707L11.207 7.5 8.5 10.207 7.793 9.5l1.5-1.5H4V7h5.293l-1.5-1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowRightCircleSolid;
