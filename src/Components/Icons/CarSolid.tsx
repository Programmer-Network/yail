import type { SVGProps } from "react";

const SvgCarSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2.197 2.698A3.5 3.5 0 0 1 5.198 1h4.604a3.5 3.5 0 0 1 3 1.698L15 6.358V12.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V12H4v.5A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5V6.358zM12 7H3V6h9zM2 10h3V9H2zm11-1h-3v1h3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCarSolid;
