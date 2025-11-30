import type { SVGProps } from "react";

const SvgSidebarOpened = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 4h18v16H3zm6 2h10v12H9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSidebarOpened;
