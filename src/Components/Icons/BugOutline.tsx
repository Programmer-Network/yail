import type { SVGProps } from "react";

const SvgBugOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 4.5h6m-6 0-.367.733A6 6 0 0 0 3.5 7.916V10.5a4 4 0 0 0 8 0V7.916a6 6 0 0 0-.633-2.683L10.5 4.5m-6 0v-1a3 3 0 0 1 6 0v1M0 8.5h3.5m11.5 0h-3.5M1 14l3-1.5M14 14l-3-1.5M1 3l3 1.5M14 3l-3 1.5'
    />
  </svg>
);
export default SvgBugOutline;
