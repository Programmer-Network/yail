import type { SVGProps } from "react";

const SvgIconHackernews = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    aria-label='Hacker News'
    viewBox='0 0 512 512'
    {...props}
  >
    <rect rx='15%' />
    <path d='M124 91h51l81 162 81-164h51L276 293v136h-40V293z' />
  </svg>
);
export default SvgIconHackernews;
