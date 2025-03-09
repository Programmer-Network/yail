import type { SVGProps } from "react";

const SvgBinSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11 3V1.5A1.5 1.5 0 0 0 9.5 0h-4A1.5 1.5 0 0 0 4 1.5V3H0v1h1v9.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V4h1V3zM5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3H5zM7 7v5h1V7zm-3 5V9h1v3zm6-3v3h1V9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBinSolid;
