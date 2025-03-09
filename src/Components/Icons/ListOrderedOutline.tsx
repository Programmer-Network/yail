import type { SVGProps } from "react";

const SvgListOrderedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 13.5-.354-.354A.5.5 0 0 0 .5 14zm1-11H2V2h-.5zM5 8h10V7H5zm0-4h10V3H5zm0 8h10v-1H5zm-2 1H.5v1H3zm-2.146.854 1.792-1.793-.707-.707-1.793 1.792zM1.793 10H1.5v1h.293zM1.5 10A1.5 1.5 0 0 0 0 11.5h1a.5.5 0 0 1 .5-.5zM3 11.207C3 10.54 2.46 10 1.793 10v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854H2a.2.2 0 0 1-.06.147zM0 6h3V5H0zm2-.5v-3H1v3zM1.5 2H0v1h1.5z'
    />
  </svg>
);
export default SvgListOrderedOutline;
