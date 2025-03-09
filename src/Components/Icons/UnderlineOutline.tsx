import type { SVGProps } from "react";

const SvgUnderlineOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M2 13.5h11M3.5 1v6.5a4 4 0 1 0 8 0V1' />
  </svg>
);
export default SvgUnderlineOutline;
