import type { SVGProps } from "react";

const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-testid='icon-arrow-down'
    viewBox='7 10 10 5'
    {...props}
  >
    <path fill='currentColor' d='m7 10 5 5 5-5z' />
  </svg>
);
export default SvgIconArrowDown;
