import type { SVGProps } from "react";

const SvgVimOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1.5 3.5h1v10h3l8-10v-2h-5v2h2l-5 6v-6h1v-2h-5z'
    />
  </svg>
);
export default SvgVimOutline;
