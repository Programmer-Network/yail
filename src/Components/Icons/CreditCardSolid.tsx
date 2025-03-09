import type { SVGProps } from "react";

const SvgCreditCardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 2A1.5 1.5 0 0 1 15 3.5V5H0V3.5A1.5 1.5 0 0 1 1.5 2z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 6v5.5A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5V6zm2 4h6V9H2zm11 0h-3V9h3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCreditCardSolid;
