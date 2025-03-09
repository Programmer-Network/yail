import type { SVGProps } from "react";

const SvgBrushOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M13.5 7.5v-5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v5m12 0h-12m12 0v2a2 2 0 0 1-2 2h-3v2a1 1 0 1 1-2 0v-2h-3a2 2 0 0 1-2-2v-2m4-7V5m2-4.5V3'
    />
  </svg>
);
export default SvgBrushOutline;
