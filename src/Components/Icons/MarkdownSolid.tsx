import type { SVGProps } from "react";

const SvgMarkdownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM10 5v3.293L8.854 7.146l-.708.708 2 2a.5.5 0 0 0 .708 0l2-2-.707-.708L11 8.293V5zm-7.146.146A.5.5 0 0 0 2 5.5V10h1V6.707l1.5 1.5 1.5-1.5V10h1V5.5a.5.5 0 0 0-.854-.354L4.5 6.793z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMarkdownSolid;
