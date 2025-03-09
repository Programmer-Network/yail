import type { SVGProps } from "react";

const SvgBulbOffSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 3a3.96 3.96 0 0 0-3.92 3.4l-.01.07a3.95 3.95 0 0 0 .79 2.989c.383.495.64.968.64 1.442V12.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1.599c0-.474.256-.947.64-1.442.63-.814.948-1.875.79-2.99l-.01-.07A3.96 3.96 0 0 0 7.5 3M6 15h3v-1H6z'
    />
  </svg>
);
export default SvgBulbOffSolid;
