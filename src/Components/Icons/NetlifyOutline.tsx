import type { SVGProps } from "react";

const SvgNetlifyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 7.5-.354-.354a.5.5 0 0 0 0 .708zm7-7 .354-.354a.5.5 0 0 0-.708 0zm7 7 .354.354a.5.5 0 0 0 0-.708zm-7 7-.354.354a.5.5 0 0 0 .708 0zM.854 7.854l7-7-.708-.708-7 7zm6.292-7 7 7 .708-.708-7-7zm7 6.292-7 7 .708.708 7-7zm-6.292 7-7-7-.708.708 7 7zM4.314 3.964l10 4 .372-.928-10-4zM8.58 1.728l-5.5 8.5.84.544 5.5-8.5zM2.1 5.8l6 8 .8-.6-6-8zM.394 7.989l11.5 2.5.212-.978-11.5-2.5zm2.32 1.963 9.5-4.5-.428-.904-9.5 4.5zm7.292-6.53-1.5 9.5.988.156 1.5-9.5z'
    />
  </svg>
);
export default SvgNetlifyOutline;
