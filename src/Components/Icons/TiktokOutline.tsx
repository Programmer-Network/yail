import type { SVGProps } from "react";

const SvgTiktokOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M9.5 0v11A3.5 3.5 0 1 1 6 7.5m8-2A4.5 4.5 0 0 1 9.5 1'
    />
  </svg>
);
export default SvgTiktokOutline;
