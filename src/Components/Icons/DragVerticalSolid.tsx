import type { SVGProps } from "react";

const SvgDragVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.5 2.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDragVerticalSolid;
