import type { SVGProps } from "react";

const SvgBriefcaseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M5.5 3v-.5a2 2 0 1 1 4 0V3m-9 8.5h14m-13-8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgBriefcaseOutline;
