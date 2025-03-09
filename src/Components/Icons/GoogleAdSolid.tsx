import type { SVGProps } from "react";

const SvgGoogleAdSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 6a1 1 0 0 0-1 1v1h2V7a1 1 0 0 0-1-1M11 8H9.5a.5.5 0 0 0 0 1H11z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 4.5A2.5 2.5 0 0 1 2.5 2h10A2.5 2.5 0 0 1 15 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 0 10.5zM4 10V9h2v1h1V7a2 2 0 1 0-4 0v3zm7-3H9.5a1.5 1.5 0 1 0 0 3H12V5h-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGoogleAdSolid;
