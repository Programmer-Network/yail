import type { SVGProps } from "react";

const SvgArrowLeftCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 7.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-8.5 2.707L3.793 7.5 6.5 4.793l.707.707-1.5 1.5H11v1H5.707l1.5 1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowLeftCircleSolid;
