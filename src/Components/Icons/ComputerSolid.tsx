import type { SVGProps } from "react";

const SvgComputerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M10 12h3v-1h-3z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9.5 0A1.5 1.5 0 0 0 8 1.5V3H1.5A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12H6v2H4v1h9.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0zM8.085 14H7v-2h1v1.5q.001.264.085.5M9.5 14h4a.5.5 0 0 0 .5-.5V6H9v7.5a.5.5 0 0 0 .5.5M9 5h5V1.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgComputerSolid;
