import type { SVGProps } from "react";

const SvgBottomRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 13.5v.5a.5.5 0 0 0 .5-.5zm0-.5H8v1h5.5zm.5.5V8h-1v5.5zm-.146-.354-12-12-.708.708 12 12z'
    />
  </svg>
);
export default SvgBottomRightOutline;
