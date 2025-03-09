import type { SVGProps } from "react";

const SvgPlugSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10 4H5V0H4v4H2v4h1v1.5A2.5 2.5 0 0 0 5.5 12H6v3h1v-3h1v3h1v-3h.5A2.5 2.5 0 0 0 12 9.5V8h1V4h-2V0h-1z'
    />
  </svg>
);
export default SvgPlugSolid;
