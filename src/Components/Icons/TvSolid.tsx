import type { SVGProps } from "react";

const SvgTvSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 1A1.5 1.5 0 0 0 0 2.5v8A1.5 1.5 0 0 0 1.5 12H2v1H1v1h3v-1H3v-1h9v1h-1v1h3v-1h-1v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 1z'
    />
  </svg>
);
export default SvgTvSolid;
