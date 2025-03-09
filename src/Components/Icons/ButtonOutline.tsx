import type { SVGProps } from "react";

const SvgButtonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M5.5 10V8.5m0 0v-5a1 1 0 0 1 2 0v4h3.353c.91 0 1.647.737 1.647 1.647V10A4.5 4.5 0 0 1 8 14.5h-.5a4 4 0 0 1-4-4 2 2 0 0 1 2-2Zm3.5-3h2a2.5 2.5 0 0 0 0-5H4a2.5 2.5 0 0 0 0 5'
    />
  </svg>
);
export default SvgButtonOutline;
