import type { SVGProps } from "react";

const SvgSendUpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m7.5.793 4.354 4.353-.708.708L8 2.707V12H7V2.707L3.854 5.854l-.708-.708zM14 13v1H1v-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSendUpSolid;
