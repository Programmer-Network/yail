import type { SVGProps } from "react";

const SvgDragHorizontalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
    />
  </svg>
);
export default SvgDragHorizontalOutline;
