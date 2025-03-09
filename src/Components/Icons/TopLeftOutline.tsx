import type { SVGProps } from "react";

const SvgTopLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 1.5V1a.5.5 0 0 0-.5.5zm0 .5H7V1H1.5zM1 1.5V7h1V1.5zm.146.354 12 12 .707-.708-12-12z'
    />
  </svg>
);
export default SvgTopLeftOutline;
