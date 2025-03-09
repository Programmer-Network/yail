import type { SVGProps } from "react";

const SvgForwardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.79 2.093A.5.5 0 0 0 0 2.5v10a.5.5 0 0 0 .79.407L7 8.472V12.5a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814l-7-5A.5.5 0 0 0 7 2.5v4.028z'
    />
  </svg>
);
export default SvgForwardSolid;
