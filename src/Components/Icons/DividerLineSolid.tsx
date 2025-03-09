import type { SVGProps } from "react";

const SvgDividerLineSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 2H3V1h9zm-2 3H3V4h7zm5 3H0V7h15zm-3 3H3v-1h9zm-2 3H3v-1h7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDividerLineSolid;
