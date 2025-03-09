import type { SVGProps } from "react";

const SvgInboxSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5V8h-4.5a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-5 0 .5.5 0 0 0-.5-.5H0z'
    />
    <path
      fill='currentColor'
      d='M0 9v4.5A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5V9h-4.035a3.5 3.5 0 0 1-6.93 0z'
    />
  </svg>
);
export default SvgInboxSolid;
