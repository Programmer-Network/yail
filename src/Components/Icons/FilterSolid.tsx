import type { SVGProps } from "react";

const SvgFilterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='currentColor' d='M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z' />
  </svg>
);
export default SvgFilterSolid;
