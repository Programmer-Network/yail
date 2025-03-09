import type { SVGProps } from "react";

const SvgBrushSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 2.5A2.5 2.5 0 0 1 3.5 0H5v5h1V0h1v3h1V0h3.5A2.5 2.5 0 0 1 14 2.5v7a2.5 2.5 0 0 1-2.5 2.5H9v1.5a1.5 1.5 0 0 1-3 0V12H3.5A2.5 2.5 0 0 1 1 9.5zM2 8v1.5A1.5 1.5 0 0 0 3.5 11H7v2.5a.5.5 0 0 0 1 0V11h3.5A1.5 1.5 0 0 0 13 9.5V8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBrushSolid;
