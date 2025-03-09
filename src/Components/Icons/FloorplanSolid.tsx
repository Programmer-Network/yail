import type { SVGProps } from "react";

const SvgFloorplanSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 0h4.651l3.126 2.084-.554.832L4.349 1H1v13h5V8H4V7h5v1H7v6h7V8h-2V7h2V1h-4V0h5v15H0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFloorplanSolid;
