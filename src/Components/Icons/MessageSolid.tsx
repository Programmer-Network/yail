import type { SVGProps } from "react";

const SvgMessageSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0C.671 0 0 .67 0 1.5v8.994c0 .829.671 1.499 1.5 1.499h3.733l1.851 2.775a.5.5 0 0 0 .832 0l1.851-2.775H13.5c.829 0 1.5-.67 1.5-1.5V1.5C15 .67 14.329 0 13.5 0z'
    />
  </svg>
);
export default SvgMessageSolid;
