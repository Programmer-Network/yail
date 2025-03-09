import type { SVGProps } from "react";

const SvgScreenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 1A1.5 1.5 0 0 0 0 2.5v8A1.5 1.5 0 0 0 1.5 12h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 1zM4 15h7v-1H4z'
    />
  </svg>
);
export default SvgScreenSolid;
