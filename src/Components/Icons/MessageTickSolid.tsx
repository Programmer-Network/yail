import type { SVGProps } from "react";

const SvgMessageTickSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zM7.024 8.73l3.852-4.402-.752-.658-3.148 3.598-1.622-1.623-.708.708z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMessageTickSolid;
