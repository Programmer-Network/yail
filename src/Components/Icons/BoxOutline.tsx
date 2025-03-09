import type { SVGProps } from "react";

const SvgBoxOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M.5 3.498 7.5.5l7 2.998m-14 0 7 2.998m-7-2.998V3.5m14-.002-7 2.998m7-2.998V11.5l-7 3m7-11.002L7.5 6.5v8m0-8.004V14.5m0-8.004L.5 3.5m7 11-7-3v-8'
    />
  </svg>
);
export default SvgBoxOutline;
