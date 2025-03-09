import type { SVGProps } from "react";

const SvgDenoSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7 7H6V6h1z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M8 13.981a6.46 6.46 0 0 0 2.971-.985l-.287-5.167A2.995 2.995 0 0 0 7.694 5H6a2 2 0 0 0-1.732 1H5v1H4a2 2 0 0 0 2 2h.882c.496 0 .95-.28 1.17-.724l.895.448A2.3 2.3 0 0 1 8 9.71z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDenoSolid;
