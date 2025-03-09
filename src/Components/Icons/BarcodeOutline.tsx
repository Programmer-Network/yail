import type { SVGProps } from "react";

const SvgBarcodeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 2v11m5-11v11m2-11v11m7-11v11m-4-11v11' />
  </svg>
);
export default SvgBarcodeOutline;
