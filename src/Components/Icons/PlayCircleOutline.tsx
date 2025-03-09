import type { SVGProps } from "react";

const SvgPlayCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m6.5 5.5.248-.434A.5.5 0 0 0 6 5.5zm0 4H6a.5.5 0 0 0 .748.434zm3.5-2 .248.434a.5.5 0 0 0 0-.868zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM6 5.5v4h1v-4zm.748 4.434 3.5-2-.496-.868-3.5 2zm3.5-2.868-3.5-2-.496.868 3.5 2z'
    />
  </svg>
);
export default SvgPlayCircleOutline;
