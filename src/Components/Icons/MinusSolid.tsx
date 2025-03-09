import type { SVGProps } from "react";

const SvgMinusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14 8H1V7h13z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMinusSolid;
