import type { SVGProps } from "react";

const SvgGoogleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 0 1 12.857-5.249l-.714.7A6.5 6.5 0 1 0 13.98 8H8V7h7v.5a7.5 7.5 0 0 1-15 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGoogleSolid;
