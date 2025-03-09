import type { SVGProps } from "react";

const SvgIndentIncreaseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 4H3V3h12zM.854 5.146l2 2a.5.5 0 0 1 0 .708l-2 2-.708-.708L1.793 7.5.146 5.854zM15 8H7V7h8zm0 4H3v-1h12z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgIndentIncreaseSolid;
