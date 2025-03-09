import type { SVGProps } from "react";

const SvgRobotSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M9 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 2.022A5.5 5.5 0 0 1 13 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 13.5v-6a5.5 5.5 0 0 1 5-5.478V0h1zM5.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.5 5H4v-1h7z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M0 8v4h1V8zM15 8h-1v4h1z' />
  </svg>
);
export default SvgRobotSolid;
