import type { SVGProps } from "react";

const SvgDropSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.847.14a.5.5 0 0 0-.694 0L2.867 4.283l-.004.003a6.24 6.24 0 0 0-1.747 3.23 6.1 6.1 0 0 0 .394 3.63 6.35 6.35 0 0 0 2.4 2.806A6.65 6.65 0 0 0 7.5 15a6.65 6.65 0 0 0 3.59-1.048 6.35 6.35 0 0 0 2.4-2.805 6.1 6.1 0 0 0 .394-3.63 6.24 6.24 0 0 0-1.747-3.23z'
    />
  </svg>
);
export default SvgDropSolid;
