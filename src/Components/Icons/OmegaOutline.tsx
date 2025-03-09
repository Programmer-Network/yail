import type { SVGProps } from "react";

const SvgOmegaOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M9.333 11.687a.5.5 0 1 0 .334.943zm-4 .943a.5.5 0 1 0 .334-.943zM5.5 14.5v.5H6v-.5zm4 0H9v.5h.5zM7.5 1A5.5 5.5 0 0 1 13 6.5h1A6.5 6.5 0 0 0 7.5 0zm0-1A6.5 6.5 0 0 0 1 6.5h1A5.5 5.5 0 0 1 7.5 1zM13 6.5a5.5 5.5 0 0 1-3.667 5.187l.334.943A6.5 6.5 0 0 0 14 6.5zm-7.333 5.187A5.5 5.5 0 0 1 2 6.5H1c0 2.83 1.81 5.238 4.333 6.13zM0 15h5.5v-1H0zm6-.5V12H5v2.5zm9-.5H9.5v1H15zm-5 .5V12H9v2.5z'
    />
  </svg>
);
export default SvgOmegaOutline;
