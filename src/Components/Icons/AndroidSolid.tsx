import type { SVGProps } from "react";

const SvgAndroidSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 4a6.5 6.5 0 0 0-2.934.698l-1.65-2.475-.832.554 1.627 2.44A6.5 6.5 0 0 0 1 10.5V13h13v-2.5a6.5 6.5 0 0 0-2.711-5.282l1.627-2.44-.832-.555-1.65 2.475A6.5 6.5 0 0 0 7.5 4M5 10H4V9h1zm5 0h1V9h-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAndroidSolid;
