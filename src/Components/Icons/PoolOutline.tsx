import type { SVGProps } from "react";

const SvgPoolOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      d='M1 12.6c.65.733 1.655 1.4 2.955 1.4 2.954 0 3.545-2 6.5-2 1.359 0 2.6.733 3.545 1.467M2.5 12V3.727C2.5 1.945 3.855.5 5.636.5M9.5 10V3.636C9.5 1.855 10.9.5 12.682.5M2.5 4.5h7m-7 4h7'
    />
  </svg>
);
export default SvgPoolOutline;
