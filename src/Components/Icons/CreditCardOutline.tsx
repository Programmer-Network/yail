import type { SVGProps } from "react";

const SvgCreditCardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 5.5h14M2 9.5h6m2 0h3M.5 3.5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z'
    />
  </svg>
);
export default SvgCreditCardOutline;
