import type { SVGProps } from "react";

const SvgParagraphSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 5.5A4.5 4.5 0 0 1 6.5 1H13v1h-2v12h-1V2H8v12H7v-4h-.5A4.5 4.5 0 0 1 2 5.5M7 9V2h-.5a3.5 3.5 0 1 0 0 7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgParagraphSolid;
