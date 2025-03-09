import type { SVGProps } from "react";

const SvgFirebaseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m2.5 11.5 9-8 1 9-5 2zm0 0 5-9 2 3m-7 6 1-11 3 3'
    />
  </svg>
);
export default SvgFirebaseOutline;
