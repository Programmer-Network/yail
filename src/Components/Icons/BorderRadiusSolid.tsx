import type { SVGProps } from "react";

const SvgBorderRadiusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.5 2A3.5 3.5 0 0 0 2 5.5V8H1V5.5A4.5 4.5 0 0 1 5.5 1H8v1zM11 2h-1V1h1zm3 0h-1V1h1zm0 3h-1V4h1zm0 3h-1V7h1zM2 11H1v-1h1zm12 0h-1v-1h1zM2 14H1v-1h1zm3 0H4v-1h1zm3 0H7v-1h1zm3 0h-1v-1h1zm3 0h-1v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderRadiusSolid;
