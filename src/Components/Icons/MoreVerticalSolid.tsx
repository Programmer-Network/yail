import type { SVGProps } from "react";

const SvgMoreVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6.5 2.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoreVerticalSolid;
