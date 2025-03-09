import type { SVGProps } from "react";

const SvgSubscriptOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m12.5 14.5-.354-.354A.5.5 0 0 0 12.5 15zM15 14h-2.5v1H15zm-2.146.854 1.792-1.793-.707-.707-1.793 1.792zM13.793 11H13.5v1h.293zm-.293 0a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5zm1.5 1.207C15 11.54 14.46 11 13.793 11v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854h-1a.2.2 0 0 1-.06.147zM1.9 13.8l9-12-.8-.6-9 12zm-.8-12 9 12 .8-.6-9-12z'
    />
  </svg>
);
export default SvgSubscriptOutline;
