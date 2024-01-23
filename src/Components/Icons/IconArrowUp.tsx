import type { SVGProps } from "react";

const SvgIconArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-testid='icon-arrow-up'
    viewBox='7 9 10 5'
    {...props}
  >
    <path fill='currentColor' d='m7 14 5-5 5 5z' />
  </svg>
);
export default SvgIconArrowUp;
