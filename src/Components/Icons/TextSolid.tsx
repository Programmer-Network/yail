import type { SVGProps } from "react";

const SvgTextSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h13v4h-1V2H8v11h3v1H3.5v-1H7V2H2v3H1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTextSolid;
