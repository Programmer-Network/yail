import type { SVGProps } from "react";

const SvgVennDiagramOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M2.5 9.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' />
    <path stroke='currentColor' d='M.5 5.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' />
    <path stroke='currentColor' d='M4.5 5.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' />
  </svg>
);
export default SvgVennDiagramOutline;
