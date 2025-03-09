import type { SVGProps } from "react";

const SvgAlignTextLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 4H0V3h15zM6 8H0V7h6zm3 4H0v-1h9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAlignTextLeftSolid;
