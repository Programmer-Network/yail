import type { SVGProps } from "react";

const SvgQuestionOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 0 0 2-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1'
    />
  </svg>
);
export default SvgQuestionOutline;
