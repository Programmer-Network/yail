import type { SVGProps } from "react";

const SvgDragVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M9.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM9.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM9.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z'
    />
  </svg>
);
export default SvgDragVerticalOutline;
