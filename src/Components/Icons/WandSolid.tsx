import type { SVGProps } from "react";

const SvgWandSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M10 0v2H9V0zM5.5.792 7.207 2.5l-.707.707L4.793 1.5zm8.707.708L12.5 3.206l-.707-.707L13.5.792zM4 4.997h2v1H4zm9 0h2v1h-2zM7.207 8.495l-6.354 6.35-.706-.708L6.5 7.787zm5.293-.707 1.707 1.706-.707.707-1.707-1.706zM10 8.994v2H9v-2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgWandSolid;
