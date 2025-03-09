import type { SVGProps } from "react";

const SvgLinkRemoveOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 6.5 1.328 9.672a2.828 2.828 0 1 0 4 4L8.5 10.5m2-2 3.172-3.172a2.829 2.829 0 0 0-4-4L6.5 4.5m-2 6 6-6M3 4.5H0M4.5 0v3m6 9v3m1.5-4.5h3'
    />
  </svg>
);
export default SvgLinkRemoveOutline;
