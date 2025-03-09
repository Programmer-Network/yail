import type { SVGProps } from "react";

const SvgFileTickOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m5 7.5 2 2 3.5-4m0-5h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10z'
    />
  </svg>
);
export default SvgFileTickOutline;
