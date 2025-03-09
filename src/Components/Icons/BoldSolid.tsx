import type { SVGProps } from "react";

const SvgBoldSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 1.58c0-.32.26-.58.58-.58H8.5a3.5 3.5 0 0 1 2.21 6.215A3.501 3.501 0 0 1 9.5 14H3.59a.59.59 0 0 1-.59-.59zM4 8v5h5.5a2.5 2.5 0 0 0 0-5zm0-1h4.5a2.5 2.5 0 0 0 0-5H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBoldSolid;
