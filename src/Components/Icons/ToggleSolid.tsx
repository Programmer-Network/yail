import type { SVGProps } from "react";

const SvgToggleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 3.5A3.5 3.5 0 0 1 3.5 0h8a3.5 3.5 0 1 1 0 7h-8A3.5 3.5 0 0 1 0 3.5M3.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 11.5a3.5 3.5 0 0 1-3.5 3.5h-8a3.5 3.5 0 1 1 0-7h8a3.5 3.5 0 0 1 3.5 3.5M11.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgToggleSolid;
