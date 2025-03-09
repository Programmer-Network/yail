import type { SVGProps } from "react";

const SvgSearchSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.5 0a6.5 6.5 0 1 0 4.23 11.436l3.416 3.418.708-.708-3.418-3.417A6.5 6.5 0 0 0 6.5 0'
    />
  </svg>
);
export default SvgSearchSolid;
