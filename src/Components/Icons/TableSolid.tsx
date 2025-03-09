import type { SVGProps } from "react";

const SvgTableSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0H4v4H0zM0 5v8.5A1.5 1.5 0 0 0 1.5 15H4V5zM5 15h8.5a1.5 1.5 0 0 0 1.5-1.5V5H5zM15 4V1.5A1.5 1.5 0 0 0 13.5 0H5v4z'
    />
  </svg>
);
export default SvgTableSolid;
