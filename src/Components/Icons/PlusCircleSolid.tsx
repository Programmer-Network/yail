import type { SVGProps } from "react";

const SvgPlusCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M7 11V8H4V7h3V4h1v3h3v1H8v3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPlusCircleSolid;
