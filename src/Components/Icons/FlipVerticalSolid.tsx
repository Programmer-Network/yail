import type { SVGProps } from "react";

const SvgFlipVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 0v15h1V0zM4.615 3.013A.5.5 0 0 1 5 3.5v8a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.447-.724l4-8a.5.5 0 0 1 .562-.263M10.385 3.013a.5.5 0 0 1 .562.263l4 8A.5.5 0 0 1 14.5 12h-4a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .385-.487'
    />
  </svg>
);
export default SvgFlipVerticalSolid;
