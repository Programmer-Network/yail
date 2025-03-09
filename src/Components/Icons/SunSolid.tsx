import type { SVGProps } from "react";

const SvgSunSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8 2V0H7v2zM3.207 2.498 1.5.792.793 1.5 2.5 3.206zM12.5 3.206 14.207 1.5 13.5.792l-1.707 1.706zM7.5 3.997a3.499 3.499 0 1 0 0 6.996 3.499 3.499 0 1 0 0-6.996M2 6.995H0v1h2zM15 6.995h-2v1h2zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706zM14.207 13.491 12.5 11.785l-.707.707L13.5 14.2zM8 14.99v-1.998H7v1.999z'
    />
  </svg>
);
export default SvgSunSolid;
