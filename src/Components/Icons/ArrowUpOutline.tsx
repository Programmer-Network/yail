import type { SVGProps } from "react";

const SvgArrowUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 1.5.354-.354L7.5.793l-.354.353zm-.354.354 4 4 .708-.708-4-4zm0-.708-4 4 .708.708 4-4zM7 1.5V14h1V1.5z'
    />
  </svg>
);
export default SvgArrowUpOutline;
