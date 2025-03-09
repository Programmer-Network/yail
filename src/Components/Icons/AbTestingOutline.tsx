import type { SVGProps } from "react";

const SvgAbTestingOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1.5 11V6.5a2 2 0 1 1 4 0V11m-4-2.5h4m6.5-1H9.5m2.5 0a1.5 1.5 0 0 0 0-3H9.5v3m2.5 0a1.5 1.5 0 0 1 0 3H9.5v-3M7.5 1v13'
    />
  </svg>
);
export default SvgAbTestingOutline;
