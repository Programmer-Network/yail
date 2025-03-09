import type { SVGProps } from "react";

const SvgFigmaSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 9.5a2.5 2.5 0 0 1-1-2c0-.818.393-1.544 1-2A2.5 2.5 0 0 1 5.5 1h4A2.5 2.5 0 0 1 11 5.5a2.5 2.5 0 0 1-3 4v2a2.5 2.5 0 1 1-4-2'
    />
  </svg>
);
export default SvgFigmaSolid;
