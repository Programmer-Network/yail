import type { SVGProps } from "react";

const SvgSkullSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 7.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M10 7.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6.5a6.5 6.5 0 0 1 13 0v3.382a1.5 1.5 0 0 1-.83 1.342l-1.17.585v.691A2.5 2.5 0 0 1 9.5 15h-4A2.5 2.5 0 0 1 3 12.5v-.691l-1.17-.585A1.5 1.5 0 0 1 1 9.882zM4.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.146 9.146a.5.5 0 0 1 .708 0l1 1-.708.708-.646-.647-.646.647-.708-.708z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSkullSolid;
