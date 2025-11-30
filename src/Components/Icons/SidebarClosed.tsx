import type { SVGProps } from "react";

const SvgSidebarClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M21 20H7V4h14zm-2-2H9V6h10z'
        clipRule='evenodd'
      />
      <path d='M3 20h2V4H3z' />
    </g>
  </svg>
);
export default SvgSidebarClosed;
