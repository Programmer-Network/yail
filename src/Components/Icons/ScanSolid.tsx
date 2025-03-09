import type { SVGProps } from "react";

const SvgScanSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2.5 1A1.5 1.5 0 0 0 1 2.5V5H0V2.5A2.5 2.5 0 0 1 2.5 0H5v1zm10 0H10V0h2.5A2.5 2.5 0 0 1 15 2.5V5h-1V2.5A1.5 1.5 0 0 0 12.5 1m.5 7H2V7h11zM0 12.5V10h1v2.5A1.5 1.5 0 0 0 2.5 14H5v1H2.5A2.5 2.5 0 0 1 0 12.5m14 0V10h1v2.5a2.5 2.5 0 0 1-2.5 2.5H10v-1h2.5a1.5 1.5 0 0 0 1.5-1.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgScanSolid;
