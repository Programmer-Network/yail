import type { SVGProps } from "react";

const SvgDownloadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m7.5 10.5-3.25-3m3.25 3 3-3m-3 3V1m6 6v6.5h-12V7'
    />
  </svg>
);
export default SvgDownloadOutline;
