import type { SVGProps } from "react";

const SvgGoogleDriveOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m5 1.5-4.5 8 2 4M5 1.5l2.5 4-5 8M5 1.5h5l4.5 8M5 1.5l5 8h4.5m-12 4 2.5-4h9.5m-12 4h10l2-4'
    />
  </svg>
);
export default SvgGoogleDriveOutline;
