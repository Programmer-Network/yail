import type { SVGProps } from "react";

const SvgWalletSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h8A1.5 1.5 0 0 1 11 2.5V3h2.5A1.5 1.5 0 0 1 15 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5zM9 10h3V9H9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgWalletSolid;
