import type { SVGProps } from "react";

const SvgImageDocumentSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293v6.999l-2.5-2.504-2.959 2.957L4.5 5.7 1 10.075zM11 6h-1V5h1z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M1 11.676V13.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5v-1.793l-2.5-2.504-3.041 3.039L4.5 7.3z'
    />
  </svg>
);
export default SvgImageDocumentSolid;
