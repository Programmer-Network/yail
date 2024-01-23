import type { SVGProps } from "react";
const SvgIconImport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M17 2h-2v2H9V2H7v2H3v18h4v-2H5V10h14v10h-2v2h4V4h-4zM7 6h12v2H5V6zm6 16h-2v-6H9v-2h2v-2h2v2h2v2h-2zm2-6v2h2v-2zm-6 0v2H7v-2z'
    />
  </svg>
);
export default SvgIconImport;
