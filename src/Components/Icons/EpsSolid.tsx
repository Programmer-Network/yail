import type { SVGProps } from "react";

const SvgEpsSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7 8h1V7H7z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM5 6H2v5h3v-1H3V9h2V8H3V7h2zm1 0h3v3H7v2H6zm4 0h3v1h-2v1h2v3h-3v-1h2V9h-2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgEpsSolid;
