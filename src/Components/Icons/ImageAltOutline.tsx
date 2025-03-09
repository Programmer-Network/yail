import type { SVGProps } from "react";

const SvgImageAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10 3.5h1m3.5 5.993-3-2.998-3 2.998-4-4.996L.5 9.5m1-9h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgImageAltOutline;
