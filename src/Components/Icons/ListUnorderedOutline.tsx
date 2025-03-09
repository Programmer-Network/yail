import type { SVGProps } from "react";

const SvgListUnorderedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4 7.5h11m-15 0h2m2-4h11m-15 0h2m2 8h11m-15 0h2'
    />
  </svg>
);
export default SvgListUnorderedOutline;
