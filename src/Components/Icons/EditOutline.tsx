import type { SVGProps } from "react";

const SvgEditOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 10.5-.354-.354-.146.147v.207zm10-10 .354-.354a.5.5 0 0 0-.708 0zm4 4 .354.354a.5.5 0 0 0 0-.708zm-10 10v.5h.207l.147-.146zm-4 0H0a.5.5 0 0 0 .5.5zm.354-3.646 10-10-.708-.708-10 10zm9.292-10 4 4 .708-.708-4-4zm4 3.292-10 10 .708.708 10-10zM4.5 14h-4v1h4zm-3.5.5v-4H0v4z'
    />
  </svg>
);
export default SvgEditOutline;
