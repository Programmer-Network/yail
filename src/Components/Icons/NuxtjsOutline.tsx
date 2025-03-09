import type { SVGProps } from "react";

const SvgNuxtjsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m.5 12.5 6-10 6 10z'
    />
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m4.5 12.5 5-8.5 5 8.5z'
    />
  </svg>
);
export default SvgNuxtjsOutline;
