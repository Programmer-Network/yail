import type { SVGProps } from "react";

const SvgCartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m.5.5.6 2m0 0 2.4 8h11v-6a2 2 0 0 0-2-2zm11.4 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-8-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z'
    />
  </svg>
);
export default SvgCartOutline;
