import type { SVGProps } from "react";

const SvgSortDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 13.293V0h1v13.293l2.146-2.147.708.708-3 3a.5.5 0 0 1-.708 0l-3-3 .708-.708zM15 4H9V3h6zm-2 4H9V7h4zm-2 4H9v-1h2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSortDownSolid;
