import type { SVGProps } from "react";

const SvgFlagSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 .5A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .457.703L13.047 5l1.91 4.297A.5.5 0 0 1 14.5 10H1v5H0z'
    />
  </svg>
);
export default SvgFlagSolid;
