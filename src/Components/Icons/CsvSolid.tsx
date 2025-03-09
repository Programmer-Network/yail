import type { SVGProps } from "react";

const SvgCsvSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 6h3v1H3v3h2v1H2zm7 0H6v3h2v1H6v1h3V8H7V7h2zm2 0h-1v3.707l1.5 1.5 1.5-1.5V6h-1v3.293l-.5.5-.5-.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCsvSolid;
