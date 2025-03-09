import type { SVGProps } from "react";

const SvgDistributeHorizontalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M1 15V0H0v15zM15 15V0h-1v15zM10 1H5v13h5z' />
  </svg>
);
export default SvgDistributeHorizontalSolid;
