import type { SVGProps } from "react";

const SvgBagAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10.5 2v2.5a3 3 0 0 1-6 0V2m-3-.5v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1Z'
    />
  </svg>
);
export default SvgBagAltOutline;
