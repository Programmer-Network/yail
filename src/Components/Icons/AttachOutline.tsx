import type { SVGProps } from "react";

const SvgAttachOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m13.5 7.5-5.757 5.757a4.243 4.243 0 0 1-6-6l5.929-5.929a2.828 2.828 0 0 1 4 4l-5.758 5.758a1.414 1.414 0 0 1-2-2L9.5 3.5'
    />
  </svg>
);
export default SvgAttachOutline;
