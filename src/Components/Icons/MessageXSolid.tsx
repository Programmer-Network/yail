import type { SVGProps } from "react";

const SvgMessageXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zm9.146 7.354L7.5 7.207 5.854 8.854l-.708-.708L6.793 6.5 5.146 4.854l.708-.708L7.5 5.793l1.646-1.647.708.708L8.207 6.5l1.647 1.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMessageXSolid;
