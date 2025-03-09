import type { SVGProps } from "react";

const SvgRupeeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.5 8.5V8a.5.5 0 0 0-.325.88zM2 1h11V0H2zm.5 8h3V8h-3zm3-9h-3v1h3zM2.175 8.88l7 6 .65-.76-7-6zM10 4.5A4.5 4.5 0 0 0 5.5 0v1A3.5 3.5 0 0 1 9 4.5zM5.5 9A4.5 4.5 0 0 0 10 4.5H9A3.5 3.5 0 0 1 5.5 8zM2 5h11V4H2z'
    />
  </svg>
);
export default SvgRupeeOutline;
