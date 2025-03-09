import type { SVGProps } from "react";

const SvgVueSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.717 1H.5a.5.5 0 0 0-.432.752l7 12a.5.5 0 0 0 .864 0l7-12A.5.5 0 0 0 14.5 1h-2.217L7.5 8.972z'
    />
    <path
      fill='currentColor'
      d='M11.117 1H8.19L7.5 2.382 6.809 1H3.883L7.5 7.028z'
    />
  </svg>
);
export default SvgVueSolid;
