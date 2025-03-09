import type { SVGProps } from "react";

const SvgHexagonSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 4.213 7.5.42 1 4.213v6.574l6.5 3.792 6.5-3.792z'
    />
  </svg>
);
export default SvgHexagonSolid;
