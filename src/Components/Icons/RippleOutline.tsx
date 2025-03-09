import type { SVGProps } from "react";

const SvgRippleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m1.5 1.5 3.06 3.316a4 4 0 0 0 5.88 0L13.5 1.5m-12 12 3.06-3.316a4 4 0 0 1 5.88 0L13.5 13.5'
    />
  </svg>
);
export default SvgRippleOutline;
