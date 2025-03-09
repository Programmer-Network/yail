import type { SVGProps } from "react";

const SvgBookOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5.5V0a.5.5 0 0 0-.5.5zm0 13H1a.5.5 0 0 0 .5.5zM4 0v15h1V0zM1.5 1h10V0h-10zM13 2.5v9h1v-9zM11.5 13h-10v1h10zm-9.5.5V.5H1v13zm11-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM11.5 1A1.5 1.5 0 0 1 13 2.5h1A2.5 2.5 0 0 0 11.5 0zM7 5h4V4H7z'
    />
  </svg>
);
export default SvgBookOutline;
