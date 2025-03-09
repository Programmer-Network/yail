import type { SVGProps } from "react";

const SvgMoodTongueSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M6 10.5V9h3v1.5a1.5 1.5 0 0 1-3 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M5 6H4V5h1zm6 0h-1V5h1zM4 9h1v1.5a2.5 2.5 0 0 0 5 0V9h1V8H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoodTongueSolid;
