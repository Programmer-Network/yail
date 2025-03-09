import type { SVGProps } from "react";

const SvgAlignCenterVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 1H3v6H0v1h3v6h4V8h1v3.5h4V8h3V7h-3V3.5H8V7H7z'
    />
  </svg>
);
export default SvgAlignCenterVerticalSolid;
