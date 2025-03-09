import type { SVGProps } from "react";

const SvgSunOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996-1-1m12 0-1 1m-10 9.993-1 1m12 0-1-1m-2-4.997a3 3 0 0 1-3 2.998 2.999 2.999 0 1 1 3-2.998Z'
    />
  </svg>
);
export default SvgSunOutline;
