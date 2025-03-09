import type { SVGProps } from "react";

const SvgAlignTextJustifySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 4H0V3h15zm0 4H0V7h15zm0 4H0v-1h15z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAlignTextJustifySolid;
