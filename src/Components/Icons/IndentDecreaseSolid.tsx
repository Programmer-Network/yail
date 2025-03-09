import type { SVGProps } from "react";

const SvgIndentDecreaseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 4H3V3h12zM1.207 7.5l1.647-1.646-.708-.708-2 2a.5.5 0 0 0 0 .708l2 2 .708-.708zM15 8H7V7h8zm0 4H3v-1h12z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgIndentDecreaseSolid;
