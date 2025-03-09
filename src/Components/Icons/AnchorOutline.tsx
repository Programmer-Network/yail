import type { SVGProps } from "react";

const SvgAnchorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M7.5 4.497a2 2 0 0 0 2-1.998 2 2 0 0 0-4 0 2 2 0 0 0 2 1.998Zm0 0v9.994m0 0c-3.866 0-7-3.132-7-6.996h2m5 6.996c3.866 0 7-3.132 7-6.996h-2'
    />
  </svg>
);
export default SvgAnchorOutline;
