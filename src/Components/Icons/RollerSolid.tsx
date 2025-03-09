import type { SVGProps } from "react";

const SvgRollerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v.55a2.5 2.5 0 0 1 2 2.45v1.491a2.5 2.5 0 0 1-1.813 2.404L8.363 9.774a.5.5 0 0 0-.363.48V11h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H7v-.746a1.5 1.5 0 0 1 1.088-1.442l4.824-1.378A1.5 1.5 0 0 0 14 5.99V4.5a1.5 1.5 0 0 0-1-1.415V3.5A1.5 1.5 0 0 1 11.5 5h-10A1.5 1.5 0 0 1 0 3.5z'
    />
  </svg>
);
export default SvgRollerSolid;
