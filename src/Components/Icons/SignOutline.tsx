import type { SVGProps } from "react";

const SvgSignOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 6.5V6a.5.5 0 0 0-.5.5zm10 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-10 0H4a.5.5 0 0 0 .5.5zM1 1v14h1V1zM0 4h15V3H0zm4.5 3h10V6h-10zm9.5-.5v6h1v-6zm.5 5.5h-10v1h10zm-9.5.5v-6H4v6zm1-9v3h1v-3zm6 0v3h1v-3z'
    />
  </svg>
);
export default SvgSignOutline;
