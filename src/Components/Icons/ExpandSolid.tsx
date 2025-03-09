import type { SVGProps } from "react";

const SvgExpandSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h4v1H2.707l3.147 3.146-.708.708L2 2.707V5H1zm11.293 1H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147zm4-.708L13 12.293V10h1v4h-4v-1h2.293L9.146 9.854z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgExpandSolid;
