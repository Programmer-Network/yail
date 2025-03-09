import type { SVGProps } from "react";

const SvgSdCardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.293 0H12.5A1.5 1.5 0 0 1 14 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V4.293zM6 3v3h1V3zm2 0v3h1V3zm2 3V3h1v3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSdCardSolid;
