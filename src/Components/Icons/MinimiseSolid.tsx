import type { SVGProps } from "react";

const SvgMinimiseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.854 1.854 10.707 5H13v1H9V2h1v2.293l3.146-3.147zM4.293 5 1.146 1.854l.708-.708L5 4.293V2h1v4H2V5zM2 9h4v4H5v-2.293l-3.146 3.147-.708-.707L4.293 10H2zm7 0h4v1h-2.293l3.147 3.146-.708.708L10 10.707V13H9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMinimiseSolid;
