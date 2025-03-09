import type { SVGProps } from "react";

const SvgYoutubeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M8.599 7.5 7 8.566V6.434z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.506 1.773a28.6 28.6 0 0 1 11.988 0A1.905 1.905 0 0 1 15 3.636v7.728c0 .898-.628 1.675-1.506 1.863a28.6 28.6 0 0 1-11.988 0A1.905 1.905 0 0 1 0 11.364V3.636c0-.898.628-1.675 1.506-1.863m5.271 3.311A.5.5 0 0 0 6 5.5v4a.5.5 0 0 0 .777.416l3-2a.5.5 0 0 0 0-.832z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgYoutubeSolid;
