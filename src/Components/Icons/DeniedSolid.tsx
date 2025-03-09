import type { SVGProps } from "react";

const SvgDeniedSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m2.564-4.23a6.5 6.5 0 0 0 9.165 9.165zm.707-.706 9.165 9.165a6.5 6.5 0 0 0-9.165-9.165'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDeniedSolid;
