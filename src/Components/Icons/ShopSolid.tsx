import type { SVGProps } from "react";

const SvgShopSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 1H1V0h13zM1.01 2.402A.5.5 0 0 1 1.5 2h12a.5.5 0 0 1 .49.402l1 5A.5.5 0 0 1 14.5 8H.5a.5.5 0 0 1-.49-.598zM1 9v5H0v1h15v-1h-1V9h-2v2H3V9z'
    />
    <path fill='currentColor' d='M4 9h7v1H4z' />
  </svg>
);
export default SvgShopSolid;
