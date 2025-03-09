import type { SVGProps } from "react";

const SvgAngularOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.137-.48a.5.5 0 0 0-.274 0zm-7 2-.137-.48a.5.5 0 0 0-.36.535zm1 9-.497.055a.5.5 0 0 0 .273.392zm6 3-.224.447a.5.5 0 0 0 .448 0zm6-3 .224.447a.5.5 0 0 0 .273-.392zm1-9 .497.055a.5.5 0 0 0-.36-.536zm-7 .5.458-.2L7.5 1.753 7.042 2.8zM7.363.02l-7 2 .274.96 7-2zM.003 2.554l1 9 .994-.11-1-9zm1.273 9.392 6 3 .448-.894-6-3zm6.448 3 6-3-.448-.894-6 3zm6.273-3.392 1-9-.994-.11-1 9zm.64-9.536-7-2-.274.962 7 2zM4.458 11.2l3.5-8-.916-.4-3.5 8zm2.584-8 3.5 8 .916-.4-3.5-8zM5 9h5V8H5z'
    />
  </svg>
);
export default SvgAngularOutline;
