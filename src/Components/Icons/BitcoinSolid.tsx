import type { SVGProps } from "react";

const SvgBitcoinSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 1V0h1v1h3V0h1v1h.5a3.5 3.5 0 0 1 2.21 6.215A3.501 3.501 0 0 1 9.5 14H8v1H7v-1H4v1H3v-1H2v-1h1V8H2V7h1V2H2V1zm1 1v5h4.5a2.5 2.5 0 0 0 0-5zm0 6h5.5a2.5 2.5 0 0 1 0 5H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBitcoinSolid;
