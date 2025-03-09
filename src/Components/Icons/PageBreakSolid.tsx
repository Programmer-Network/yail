import type { SVGProps } from "react";

const SvgPageBreakSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V8H1zM1 11h13v2.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM0 8.993h3v1H0zM4 8.993h3v1H4zM11 8.993H8v1h3zM12 8.993h3v1h-3z'
    />
  </svg>
);
export default SvgPageBreakSolid;
