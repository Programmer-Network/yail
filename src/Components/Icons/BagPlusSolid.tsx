import type { SVGProps } from "react";

const SvgBagPlusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 3.5a2.5 2.5 0 0 1 5 0V4h1v-.5a3.5 3.5 0 1 0-7 0V4h1z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.904 6.334A1.5 1.5 0 0 1 3.395 5h8.21a1.5 1.5 0 0 1 1.49 1.334l.779 7A1.5 1.5 0 0 1 12.383 15H2.617a1.5 1.5 0 0 1-1.49-1.666zM7 9V7h1v2h2v1H8v2H7v-2H5V9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBagPlusSolid;
