import type { SVGProps } from "react";

const SvgAddSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 7V1h1v6h6v1H8v6H7V8H1V7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAddSolid;
