import type { SVGProps } from "react";

const SvgMenuSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 2H0V1h15zm0 4H0V5h15zm0 4H0V9h15zm0 4H0v-1h15z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMenuSolid;
