import type { SVGProps } from "react";

const SvgAndroidOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m2.5 2.5 2 3m8-3-2 3M4 9.5h1m5 0h1m-9.5 3v-2a6 6 0 1 1 12 0v2z'
    />
  </svg>
);
export default SvgAndroidOutline;
