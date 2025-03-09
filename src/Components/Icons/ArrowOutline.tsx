import type { SVGProps } from "react";

const SvgArrowOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5.5V0a.5.5 0 0 0-.5.5zm0 4H0a.5.5 0 0 0 .854.354zm4-4 .354.354A.5.5 0 0 0 4.5 0zM2.146 2.854l12 12 .708-.708-12-12zM0 .5v4h1v-4zm.854 4.354 4-4-.708-.708-4 4zM4.5 0h-4v1h4z'
    />
  </svg>
);
export default SvgArrowOutline;
