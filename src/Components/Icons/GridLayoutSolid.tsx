import type { SVGProps } from "react";

const SvgGridLayoutSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0A1.5 1.5 0 0 0 0 1.5v4A1.5 1.5 0 0 0 1.5 7h4A1.5 1.5 0 0 0 7 5.5v-4A1.5 1.5 0 0 0 5.5 0zM9.5 0A1.5 1.5 0 0 0 8 1.5v4A1.5 1.5 0 0 0 9.5 7h4A1.5 1.5 0 0 0 15 5.5v-4A1.5 1.5 0 0 0 13.5 0zM1.5 8A1.5 1.5 0 0 0 0 9.5v4A1.5 1.5 0 0 0 1.5 15h4A1.5 1.5 0 0 0 7 13.5v-4A1.5 1.5 0 0 0 5.5 8zM9.5 8A1.5 1.5 0 0 0 8 9.5v4A1.5 1.5 0 0 0 9.5 15h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 13.5 8z'
    />
  </svg>
);
export default SvgGridLayoutSolid;
