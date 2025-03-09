import type { SVGProps } from "react";

const SvgYenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 15V7.5m0 0-5-7m5 7 5-7M3 7.5h9m-9 4h9'
    />
  </svg>
);
export default SvgYenOutline;
