import type { SVGProps } from "react";

const SvgSuperscriptOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m12.5 3.5-.354-.354A.5.5 0 0 0 12.5 4zm1.793-1.793-.354-.353zM15 3h-2.5v1H15zm-2.146.854 1.792-1.793-.707-.707-1.793 1.792zM13.793 0H13.5v1h.293zM13.5 0A1.5 1.5 0 0 0 12 1.5h1a.5.5 0 0 1 .5-.5zM15 1.207C15 .54 14.46 0 13.793 0v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854h-1a.2.2 0 0 1-.06.147zM1.1 1.8l9 12 .8-.6-9-12zm9-.6-9 12 .8.6 9-12z'
    />
  </svg>
);
export default SvgSuperscriptOutline;
