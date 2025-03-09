import type { SVGProps } from "react";

const SvgNpmOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 10.5v2h2v-2h8v-6H.5v6zm0 0v-6m4 0v6M6.5 6v3m-4-3v4.5m8-4.5v4.5m2-4.5v4.5'
    />
  </svg>
);
export default SvgNpmOutline;
