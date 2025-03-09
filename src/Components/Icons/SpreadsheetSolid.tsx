import type { SVGProps } from "react";

const SvgSpreadsheetSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10 7.995V10H8V7.995zM10 4.997v1.998H8V4.997zM7 4.997H5v1.998h2zM7 7.995H5V10h2z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm10 2.497H4V11h7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSpreadsheetSolid;
