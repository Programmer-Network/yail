import type { SVGProps } from "react";

const SvgBuildingSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.724.053a.5.5 0 0 0-.448 0l-6 3 .448.894L7.5 1.06l5.776 2.888.448-.894zM14 6h1V5H0v1h1v8H0v1h4V8h5v7h6v-1h-1z'
    />
    <path fill='currentColor' d='M8 15V9H5v6z' />
  </svg>
);
export default SvgBuildingSolid;
