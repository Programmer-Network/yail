import type { SVGProps } from "react";

const SvgAzureOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m3.5 4.5-3 7h3l4-11zM14.5 13.5l-5-11-2 5 3 4-6 2z'
    />
  </svg>
);
export default SvgAzureOutline;
