import type { SVGProps } from "react";

const SvgPageNumberOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m10.5.5.354-.354L10.707 0H10.5zm3 3h.5v-.207l-.146-.147zm-4 9-.354-.354A.5.5 0 0 0 9.5 13zm3 1.5h-10v1h10zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2.5 0A1.5 1.5 0 0 0 1 1.5h1a.5.5 0 0 1 .5-.5zM12 12H9.5v1H12zm-2.146.854 1.792-1.793-.707-.707-1.793 1.792zM10.793 9H10.5v1h.293zM10.5 9A1.5 1.5 0 0 0 9 10.5h1a.5.5 0 0 1 .5-.5zm1.5 1.207C12 9.54 11.46 9 10.793 9v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854h-1a.2.2 0 0 1-.06.147zM13 3.5v10h1v-10zm-11 10v-12H1v12z'
    />
  </svg>
);
export default SvgPageNumberOutline;
