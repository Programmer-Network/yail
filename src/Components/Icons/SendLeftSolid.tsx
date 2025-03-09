import type { SVGProps } from "react";

const SvgSendLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13 1h1v13h-1zM2.707 8l3.147 3.146-.708.708L.793 7.5l4.353-4.354.708.708L2.707 7H12v1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSendLeftSolid;
