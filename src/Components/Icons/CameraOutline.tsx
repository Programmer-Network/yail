import type { SVGProps } from "react";

const SvgCameraOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7 1.5H2m12.5 11v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Zm-5-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
    />
  </svg>
);
export default SvgCameraOutline;
