import type { SVGProps } from "react";

const SvgBottomLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 13.5H1a.5.5 0 0 0 .5.5zm0 .5H7v-1H1.5zm.5-.5V8H1v5.5zm-.146.354 12-12-.708-.708-12 12z'
    />
  </svg>
);
export default SvgBottomLeftOutline;
