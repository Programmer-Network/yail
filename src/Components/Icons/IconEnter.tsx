import type { SVGProps } from "react";

const SvgIconEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-testid='icon-enter'
    viewBox='0 0 512 512'
    {...props}
  >
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={32}
      d='M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40'
    />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={32}
      d='m272 336 80-80-80-80M48 256h288'
    />
  </svg>
);
export default SvgIconEnter;
