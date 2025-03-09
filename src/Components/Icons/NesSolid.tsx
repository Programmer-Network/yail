import type { SVGProps } from "react";

const SvgNesSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 4.5A1.5 1.5 0 0 1 1.5 3h12A1.5 1.5 0 0 1 15 4.5v6a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 10.5zM3 10V9H2V8h1V7h1v1h1v1H4v1zm8 0h1V9h-1zm-1 0H9V9h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgNesSolid;
