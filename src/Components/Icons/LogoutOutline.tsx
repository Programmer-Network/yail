import type { SVGProps } from "react";

const SvgLogoutOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m13.5 7.5-3 3.25m3-3.25-3-3m3 3H4m4 6H1.5v-12H8'
    />
  </svg>
);
export default SvgLogoutOutline;
