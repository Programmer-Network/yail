import type { SVGProps } from "react";

const SvgCropSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 3V0h1v3h8v8h3v1h-3v3h-1v-3H3V6h1v5h7V4H0V3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCropSolid;
