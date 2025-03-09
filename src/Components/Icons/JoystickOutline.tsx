import type { SVGProps } from "react";

const SvgJoystickOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 10.5V10a.5.5 0 0 0-.5.5zm12 0h.5a.5.5 0 0 0-.5-.5zm0 4v.5a.5.5 0 0 0 .5-.5zm-12 0H1a.5.5 0 0 0 .5.5zm0-3.5h12v-1h-12zm11.5-.5v4h1v-4zm.5 3.5h-12v1h12zM2 14.5v-4H1v4zm6-4v-4H7v4zM7.5 0A3.5 3.5 0 0 0 4 3.5h1A2.5 2.5 0 0 1 7.5 1zM11 3.5A3.5 3.5 0 0 0 7.5 0v1A2.5 2.5 0 0 1 10 3.5zM7.5 7A3.5 3.5 0 0 0 11 3.5h-1A2.5 2.5 0 0 1 7.5 6zm0-1A2.5 2.5 0 0 1 5 3.5H4A3.5 3.5 0 0 0 7.5 7zM3 9h2V8H3z'
    />
  </svg>
);
export default SvgJoystickOutline;
