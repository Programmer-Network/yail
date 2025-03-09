import type { SVGProps } from "react";

const SvgBedDoubleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M0 0h15v6h-1V1H1v5H0z' />
    <path
      fill='currentColor'
      d='M6 6H2V5h4zM0 15h1v-4h13v4h1V7H0zM9 6h4V5H9z'
    />
  </svg>
);
export default SvgBedDoubleSolid;
