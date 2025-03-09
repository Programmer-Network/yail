import type { SVGProps } from "react";

const SvgMoonSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.707.003a.5.5 0 0 0-.375.846 6 6 0 0 1-5.569 10.024.5.5 0 0 0-.519.765A7.5 7.5 0 1 0 7.707.003'
    />
  </svg>
);
export default SvgMoonSolid;
