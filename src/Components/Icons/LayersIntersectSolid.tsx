import type { SVGProps } from "react";

const SvgLayersIntersectSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 1.5V4H1.5A1.5 1.5 0 0 0 0 5.5v8A1.5 1.5 0 0 0 1.5 15h8a1.5 1.5 0 0 0 1.5-1.5V11h2.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0h-8A1.5 1.5 0 0 0 4 1.5M5.5 1a.5.5 0 0 0-.5.5V4h4.5A1.5 1.5 0 0 1 11 5.5V10h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm0 10A1.5 1.5 0 0 1 4 9.5V5H1.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLayersIntersectSolid;
