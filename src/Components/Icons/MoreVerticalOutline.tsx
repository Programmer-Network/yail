import type { SVGProps } from "react";

const SvgMoreVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM7.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z'
    />
  </svg>
);
export default SvgMoreVerticalOutline;
