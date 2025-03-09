import type { SVGProps } from "react";

const SvgKeyboardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 0v4h5.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-7A1.5 1.5 0 0 1 1.5 4H7V0zm2 6h1v1h-1zm1 2h-1v1h1zm0 3H4v1h7zM7 8h1v1H7zM5 8H4v1h1zm3-2H7v1h1zM4 6h1v1H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgKeyboardSolid;
