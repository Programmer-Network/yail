import type { SVGProps } from "react";

const SvgTrophySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.5 0A1.5 1.5 0 0 0 3 1.5V2h-.5a2.5 2.5 0 0 0 0 5h.756A4.5 4.5 0 0 0 7 9.973V14H4v1h7v-1H8V9.973A4.5 4.5 0 0 0 11.744 7h.756a2.5 2.5 0 0 0 0-5H12v-.5A1.5 1.5 0 0 0 10.5 0zM12 3v2.5q0 .254-.027.5h.527a1.5 1.5 0 0 0 0-3zM2.5 3H3v2.5q0 .254.027.5H2.5a1.5 1.5 0 1 1 0-3'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrophySolid;
