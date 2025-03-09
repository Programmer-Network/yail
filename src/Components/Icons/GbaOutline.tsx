import type { SVGProps } from "react";

const SvgGbaOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2 6.5h3m7 0h1m-2 2h1M3.5 5v3m1.606-5.5h4.788a2 2 0 0 1 1.11.336L12 3.5h.138a2 2 0 0 1 1.995 1.858l.32 4.475a1 1 0 0 1-.55.966l-2.091 1.045a3.2 3.2 0 0 1-.65.24 15.1 15.1 0 0 1-7.324 0 3.2 3.2 0 0 1-.65-.24l-2.09-1.045a1 1 0 0 1-.55-.966l.32-4.475A2 2 0 0 1 2.861 3.5H3l.996-.664a2 2 0 0 1 1.11-.336Z'
    />
  </svg>
);
export default SvgGbaOutline;
