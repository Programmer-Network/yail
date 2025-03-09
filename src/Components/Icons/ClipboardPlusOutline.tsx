import type { SVGProps } from "react";

const SvgClipboardPlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4M7.5 6v5M5 8.5h5M4.5.5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z'
    />
  </svg>
);
export default SvgClipboardPlusOutline;
