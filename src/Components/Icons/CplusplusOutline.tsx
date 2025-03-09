import type { SVGProps } from "react";

const SvgCplusplusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M9.5 9.5c-.64.64-1.509 1-2.414 1H6.5a3 3 0 0 1 0-6h.586c.905 0 1.774.36 2.414 1m-2 .5v3M6 7.5h6M10.5 6v3m-9 1.5v-6l6-3.5 6 3.5v6l-6 3.5z'
    />
  </svg>
);
export default SvgCplusplusOutline;
