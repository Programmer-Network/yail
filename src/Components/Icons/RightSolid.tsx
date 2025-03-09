import type { SVGProps } from "react";

const SvgRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M12 7.5 4 0v15z' />
  </svg>
);
export default SvgRightSolid;
