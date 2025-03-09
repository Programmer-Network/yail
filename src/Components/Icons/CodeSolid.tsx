import type { SVGProps } from "react";

const SvgCodeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m6.007 13.418 2-12 .986.164-2 12zm-.8-8.918-3 3 3 3-.707.707L.793 7.5 4.5 3.793zm5.293-.707L14.207 7.5 10.5 11.207l-.707-.707 3-3-3-3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCodeSolid;
