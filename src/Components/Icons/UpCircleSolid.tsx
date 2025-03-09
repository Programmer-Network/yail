import type { SVGProps } from "react";

const SvgUpCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15M3.293 9 7.5 4.793 11.707 9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUpCircleSolid;
