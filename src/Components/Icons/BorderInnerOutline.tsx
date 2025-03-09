import type { SVGProps } from "react";

const SvgBorderInnerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1 1.5h1m8 0h1m2 0h1m-1 3h1m-1 6h1m-1 3h1m-4 0h1m-7 0h1m-4 0h1m-1-3h1m-1-6h1m2-3h1m-4 6h13M7.5 1v13'
    />
  </svg>
);
export default SvgBorderInnerOutline;
