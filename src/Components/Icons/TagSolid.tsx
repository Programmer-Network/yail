import type { SVGProps } from "react";

const SvgTagSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M10 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.146.146A.5.5 0 0 1 7.5 0h6A1.5 1.5 0 0 1 15 1.5v6a.5.5 0 0 1-.146.354l-7 7a.5.5 0 0 1-.708 0l-7-7a.5.5 0 0 1 0-.708zM10.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTagSolid;
