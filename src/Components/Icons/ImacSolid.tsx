import type { SVGProps } from "react";

const SvgImacSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 0A1.5 1.5 0 0 1 15 1.5V7H0V1.5A1.5 1.5 0 0 1 1.5 0zM0 8v1.5A1.5 1.5 0 0 0 1.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0 0 15 9.5V8z'
    />
  </svg>
);
export default SvgImacSolid;
