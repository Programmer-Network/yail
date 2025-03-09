import type { SVGProps } from "react";

const SvgMoodLaughSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 10c-1.246 0-2.233-.835-2.454-2h4.908c-.221 1.165-1.208 2-2.454 2'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M4 6h1V5H4zm.5 1a.5.5 0 0 0-.5.5C4 9.47 5.53 11 7.5 11S11 9.47 11 7.5a.5.5 0 0 0-.5-.5zM11 6h-1V5h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoodLaughSolid;
