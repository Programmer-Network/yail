import type { SVGProps } from "react";

const SvgImacOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2 14.5h11m-5.5-4v4M0 7.5h15M.5 1.5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z'
    />
  </svg>
);
export default SvgImacOutline;
