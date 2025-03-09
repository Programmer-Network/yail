import type { SVGProps } from "react";

const SvgArrowUpCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M4.793 6.5 7.5 3.793 10.207 6.5l-.707.707-1.5-1.5V11H7V5.707l-1.5 1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowUpCircleSolid;
