import type { SVGProps } from "react";

const SvgArrowSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .854.354L2.5 3.207l11.646 11.647.708-.708L3.207 2.5 4.854.854A.5.5 0 0 0 4.5 0'
    />
  </svg>
);
export default SvgArrowSolid;
