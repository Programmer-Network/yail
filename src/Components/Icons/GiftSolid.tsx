import type { SVGProps } from "react";

const SvgGiftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.5 3.5 0 0 0 4.5 0M8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1 2.5 2.5 0 0 0 8 3.5zM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1 2.5 2.5 0 0 1 7 3.5z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7zM8 15h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8z'
    />
  </svg>
);
export default SvgGiftSolid;
