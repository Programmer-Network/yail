import type { SVGProps } from "react";

const SvgGifSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 11V6h3v1H3v3h1V8.5h1V11zm6-4h1V6H6v1h1v3H6v1h3v-1H8zm5-1v1h-2v1h1v1h-1v2h-1V6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGifSolid;
