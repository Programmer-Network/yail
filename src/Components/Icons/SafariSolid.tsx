import type { SVGProps } from "react";

const SvgSafariSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m4.958 10.042 1.906-3.178 3.178-1.906-1.906 3.178z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5A7.5 7.5 0 0 1 7.5 0 7.5 7.5 0 0 1 15 7.5 7.5 7.5 0 0 1 7.5 15 7.5 7.5 0 0 1 0 7.5m11.929-3.743a.5.5 0 0 0-.686-.686L6.136 6.136 3.07 11.243a.5.5 0 0 0 .686.686l5.107-3.065z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSafariSolid;
