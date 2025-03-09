import type { SVGProps } from "react";

const SvgBorderOuterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7 4.5h1m2 3h1m-4 0h1m-1 3h1m-4-3h1m-3.5-6h12v12h-12z'
    />
  </svg>
);
export default SvgBorderOuterOutline;
