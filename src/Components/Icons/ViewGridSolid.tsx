import type { SVGProps } from "react";

const SvgViewGridSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1V0h1v1h3V0h1v1h3V0h1v1h3V0h1v1h1v1h-1v3h1v1h-1v3h1v1h-1v3h1v1h-1v1h-1v-1h-3v1H9v-1H6v1H5v-1H2v1H1v-1H0v-1h1v-3H0V9h1V6H0V5h1V2H0V1zm1 1v3h3V2zm4 0v3h3V2zm4 0v3h3V2zm3 4h-3v3h3zm0 4h-3v3h3zm-4 3v-3H6v3zm-4 0v-3H2v3zM2 9h3V6H2zm4-3v3h3V6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgViewGridSolid;
