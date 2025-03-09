import type { SVGProps } from "react";

const SvgXCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m4.5 4.5 6 6m-6 0 6-6m-3 10a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgXCircleOutline;
