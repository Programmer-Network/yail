import type { SVGProps } from "react";

const SvgFramerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.038.309A.5.5 0 0 1 2.5 0h10a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H8.707l4.147 4.146A.5.5 0 0 1 12.5 11H8v3.5a.5.5 0 0 1-.854.354l-5-5A.5.5 0 0 1 2 9.5v-4a.5.5 0 0 1 .5-.5h3.793L2.146.854a.5.5 0 0 1-.108-.545'
    />
  </svg>
);
export default SvgFramerSolid;
