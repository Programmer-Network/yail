import type { SVGProps } from "react";

const SvgShareSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10 2.499a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-3.565 2.26L9.13 7.52l2.038 2.858A2.5 2.5 0 0 1 15 12.493a2.5 2.5 0 1 1-4.559-1.417L8.246 8H4.949A2.501 2.501 0 0 1 0 7.495 2.5 2.5 0 0 1 4.95 7h3.312l2.37-2.84A2.5 2.5 0 0 1 10 2.499'
    />
  </svg>
);
export default SvgShareSolid;
