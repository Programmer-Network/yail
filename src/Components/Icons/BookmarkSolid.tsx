import type { SVGProps } from "react";

const SvgBookmarkSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13 0H2v14.5a.5.5 0 0 0 .812.39L7.5 11.14l4.688 3.75A.5.5 0 0 0 13 14.5z'
    />
  </svg>
);
export default SvgBookmarkSolid;
