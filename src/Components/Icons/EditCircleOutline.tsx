import type { SVGProps } from "react";

const SvgEditCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m4.5 8.5-.354-.354L4 8.293V8.5zm4-4 .354-.354a.5.5 0 0 0-.708 0zm2 2 .354.354a.5.5 0 0 0 0-.708zm-4 4v.5h.207l.147-.146zm-2 0H4a.5.5 0 0 0 .5.5zm3 3.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4.854 8.854l4-4-.708-.708-4 4zm3.292-4 2 2 .708-.708-2-2zm2 1.292-4 4 .708.708 4-4zM6.5 10h-2v1h2zm-1.5.5v-2H4v2z'
    />
  </svg>
);
export default SvgEditCircleOutline;
