import type { SVGProps } from "react";

const SvgKeySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 4a4 4 0 1 1 1.547 3.16l-3.34 3.34 1.647 1.646-.708.708L4.5 11.207 3.207 12.5l1.647 1.646-.708.708L2.5 13.207.854 14.854l-.708-.708L7.84 6.453A4 4 0 0 1 7 4m4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgKeySolid;
