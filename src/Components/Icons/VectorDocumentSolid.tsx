import type { SVGProps } from "react";

const SvgVectorDocumentSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M9 10v1H6v-1H5V7h1V6h3v1h1v3zM4 5v1h1V5zM10 5v1h1V5zM4 12v-1h1v1zM10 11v1h1v-1z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM3 4h3v1h3V4h3v3h-1v3h1v3H9v-1H6v1H3v-3h1V7H3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgVectorDocumentSolid;
