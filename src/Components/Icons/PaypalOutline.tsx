import type { SVGProps } from "react";

const SvgPaypalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M.5 12.5h4l1-4h1.795a4.625 4.625 0 0 0 4.33-3.001C12.532 3.08 10.745.5 8.161.5H3.5z'
    />
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M4 14.5h4L9 11h1.577c1.477 0 2.82-.859 3.438-2.2.927-2.008-.54-4.3-2.75-4.3H6.5z'
    />
  </svg>
);
export default SvgPaypalOutline;
