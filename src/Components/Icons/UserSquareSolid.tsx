import type { SVGProps } from "react";

const SvgUserSquareSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.5 0A1.5 1.5 0 0 0 0 1.5v12A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0zm5 9A3.5 3.5 0 0 0 3 12.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1A3.5 3.5 0 0 0 8.5 9zM5 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUserSquareSolid;
