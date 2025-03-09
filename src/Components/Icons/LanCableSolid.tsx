import type { SVGProps } from "react";

const SvgLanCableSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7 6.5V5h1v1.5a.5.5 0 0 1-1 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9 0h2v4h1v3.618L9.809 12H9v3H8v-3H7v3H6v-3h-.809L3 7.618V4h1V0h2v3h3zm0 4H6v2.5a1.5 1.5 0 1 0 3 0zM6 9v1h3V9z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M8 0H7v2h1z' />
  </svg>
);
export default SvgLanCableSolid;
