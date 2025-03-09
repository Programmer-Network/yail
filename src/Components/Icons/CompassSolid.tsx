import type { SVGProps } from "react";

const SvgCompassSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m5.618 9.382 1.255-2.51 2.509-1.254-1.255 2.51z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m10.947-2.776a.5.5 0 0 0-.67-.671l-4 2a.5.5 0 0 0-.224.223l-2 4a.5.5 0 0 0 .67.671l4-2a.5.5 0 0 0 .224-.223z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCompassSolid;
