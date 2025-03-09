import type { SVGProps } from "react";

const SvgLineOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m2 2 11 11M1.5 2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm12 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
    />
  </svg>
);
export default SvgLineOutline;
