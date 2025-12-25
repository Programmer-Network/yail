import type { SVGProps } from "react";

const SvgIconCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34'
    />
  </svg>
);
export default SvgIconCircle;
