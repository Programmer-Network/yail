import type { SVGProps } from "react";

const SvgLightningCableSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.5 0A1.5 1.5 0 0 0 4 1.5V5h7V1.5A1.5 1.5 0 0 0 9.5 0zM6 2h3v1H6z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M3 6h9v5.5a1.5 1.5 0 0 1-1.5 1.5H10v2H9v-2H6v2H5v-2h-.5A1.5 1.5 0 0 1 3 11.5z'
    />
  </svg>
);
export default SvgLightningCableSolid;
