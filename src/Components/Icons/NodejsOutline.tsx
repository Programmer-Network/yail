import type { SVGProps } from "react";

const SvgNodejsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 9m-2-5v5.264a2 2 0 0 1-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5 6 3.5v6l-6 3.5z'
    />
  </svg>
);
export default SvgNodejsOutline;
