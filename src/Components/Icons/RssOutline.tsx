import type { SVGProps } from "react";

const SvgRssOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM14.5 15C14.5 6.992 8.008.5 0 .5M0 6.5A8.5 8.5 0 0 1 8.5 15'
    />
  </svg>
);
export default SvgRssOutline;
