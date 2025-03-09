import type { SVGProps } from "react";

const SvgUploadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m7.5 1.5 3.25 3m-3.25-3-3 3m3-3V11m6-4v6.5h-12V7'
    />
  </svg>
);
export default SvgUploadOutline;
