import type { SVGProps } from "react";

const SvgTickSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14.707 3 5.5 12.207.293 7 1 6.293l4.5 4.5 8.5-8.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTickSolid;
