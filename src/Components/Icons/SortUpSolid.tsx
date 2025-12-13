import type { SVGProps } from "react";

const SvgSortUpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10 5H8v2H4V5H2v2H0v12h12V7h-2zM2 9h8v2H2zm0 8v-4h8v4zm18 2h-2v-8h-2V9h2V7h2v2h2v2h-2zm2-8v2h2v-2zm-6 0v2h-2v-2z'
    />
  </svg>
);
export default SvgSortUpSolid;
