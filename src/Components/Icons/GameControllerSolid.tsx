import type { SVGProps } from "react";

const SvgGameControllerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 5.5A3.5 3.5 0 0 1 3.5 2h8A3.5 3.5 0 0 1 15 5.5v4.528a2.972 2.972 0 0 1-5.63 1.329L9.19 11H5.809l-.179.357A2.972 2.972 0 0 1 0 10.027zM4 8V7H3V6h1V5h1v1h1v1H5v1zm6 0H9V7h1zm1-2h1V5h-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGameControllerSolid;
