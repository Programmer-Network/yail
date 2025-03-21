import type { SVGProps } from "react";

const SvgDropperOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 12.5-.354-.354-.146.147v.207zM8 5l.354-.354a.5.5 0 0 0-.708 0zm2 2 .354.354a.5.5 0 0 0 0-.708zm-7.5 7.5v.5h.207l.147-.146zm-2 0H0a.5.5 0 0 0 .5.5zm7-10-.354-.354-.353.354.353.354zm3.086-3.086-.354-.353zm2.828 0-.353.354zm.172.172.353-.354zm0 2.828-.354-.353zM10.5 7.5l-.354.354.354.353.354-.353zM.854 12.854l7.5-7.5-.708-.708-7.5 7.5zm6.792-7.5 2 2 .708-.708-2-2zm2 1.292-7.5 7.5.708.708 7.5-7.5zM2.5 14h-2v1h2zm-1.5.5v-2H0v2zM6.146 3.854l5 5 .708-.708-5-5zm1.708 1 3.085-3.086-.707-.707-3.086 3.085zm5.207-3.086.171.171.707-.707-.171-.171zm.171 2.293-3.086 3.085.708.708 3.085-3.086zm-2.378 3.085-3-3-.708.708 3 3zm2.378-5.207a1.5 1.5 0 0 1 0 2.122l.707.707a2.5 2.5 0 0 0 0-3.536zm-2.293-.171a1.5 1.5 0 0 1 2.122 0l.707-.707a2.5 2.5 0 0 0-3.536 0z'
    />
  </svg>
);
export default SvgDropperOutline;
