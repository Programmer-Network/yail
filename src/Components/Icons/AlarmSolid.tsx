import type { SVGProps } from "react";

const SvgAlarmSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m3.854.854-3 3-.708-.708 3-3zM14.147 3.854l-3-3 .707-.708 3 3z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 8.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 8V5H7v4h3V8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAlarmSolid;
