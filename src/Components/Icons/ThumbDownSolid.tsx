import type { SVGProps } from "react";

const SvgThumbDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1 10V0H0v10zM5.5 0A2.5 2.5 0 0 0 3 2.5v7.146l2.776 4.361a2.034 2.034 0 0 0 3.536-2.001L8.309 10H12.5A2.5 2.5 0 0 0 15 7.5V4.333L12.5 1a2.5 2.5 0 0 0-2-1z'
    />
  </svg>
);
export default SvgThumbDownSolid;
