import type { SVGProps } from "react";

const SvgClipboardNoAccessOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4m5.5 5-4 4m-1-10h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'
    />
  </svg>
);
export default SvgClipboardNoAccessOutline;
