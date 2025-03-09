import type { SVGProps } from "react";

const SvgMouseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 5.5a5.5 5.5 0 1 1 11 0v4a5.5 5.5 0 1 1-11 0zM7 4v3h1V4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMouseSolid;
