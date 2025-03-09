import type { SVGProps } from "react";

const SvgKeyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m.5 14.5 8-8m-6 6 2 2m0-4 2 2m4.5-5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z'
    />
  </svg>
);
export default SvgKeyOutline;
