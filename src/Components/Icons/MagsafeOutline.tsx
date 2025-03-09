import type { SVGProps } from "react";

const SvgMagsafeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 2.5v-2h8v2m-6 9V15m4-3.5V15m-5-5.5v2h6v-2m-9-7h12v7h-12z'
    />
  </svg>
);
export default SvgMagsafeOutline;
