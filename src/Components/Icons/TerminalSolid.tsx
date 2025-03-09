import type { SVGProps } from "react";

const SvgTerminalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5zm5.793 5L3.146 4.854l.708-.708L7.207 7.5l-3.353 3.354-.708-.707zM12 11H8v-1h4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTerminalSolid;
