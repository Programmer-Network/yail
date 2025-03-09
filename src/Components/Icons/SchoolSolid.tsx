import type { SVGProps } from "react";

const SvgSchoolSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m12 6.191-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M8 15v-3H7v3z' />
  </svg>
);
export default SvgSchoolSolid;
