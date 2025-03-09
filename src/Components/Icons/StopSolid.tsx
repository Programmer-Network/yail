import type { SVGProps } from "react";

const SvgStopSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M12 3H3v9h9z' />
  </svg>
);
export default SvgStopSolid;
