import type { SVGProps } from "react";

const SvgHdmiCableSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 0h9v5H3zm3 3H5V2h1zm4 0H9V2h1z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M2 6h11v3.809l-2 1V13h-1v2H9v-2H6v2H5v-2H4v-2.191l-2-1z'
    />
  </svg>
);
export default SvgHdmiCableSolid;
