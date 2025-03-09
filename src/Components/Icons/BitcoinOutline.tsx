import type { SVGProps } from "react";

const SvgBitcoinOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 1.5h5a3 3 0 1 1 0 6h-5m0-6v6m0-6H2m1.5 0V0m0 7.5h6a3 3 0 1 1 0 6h-6m0-6v6m0-6H2m1.5 6H2m1.5 0V15m4-15v1.5m0 12V15'
    />
  </svg>
);
export default SvgBitcoinOutline;
