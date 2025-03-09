import type { SVGProps } from "react";

const SvgEnvelopeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={15}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5 2.5A1.5 1.5 0 0 1 2 1h12a1.5 1.5 0 0 1 1.5 1.5v1.208L8 7.926.5 3.708z'
    />
    <path
      fill='currentColor'
      d='M.5 4.855V12.5A1.5 1.5 0 0 0 2 14h12a1.5 1.5 0 0 0 1.5-1.5V4.855L8 9.074z'
    />
  </svg>
);
export default SvgEnvelopeSolid;
