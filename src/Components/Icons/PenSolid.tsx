import type { SVGProps } from "react";

const SvgPenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2 0h11v.5a5.48 5.48 0 0 1-1.874 4.134l1.968 3.93L8 14.672V8.994H7v5.678L1.907 8.564l1.967-3.93A5.48 5.48 0 0 1 2 .5z'
    />
  </svg>
);
export default SvgPenSolid;
