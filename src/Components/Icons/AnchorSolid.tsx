import type { SVGProps } from "react";

const SvgAnchorSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 1A1.5 1.5 0 0 0 6 2.499a1.5 1.5 0 0 0 3 0A1.5 1.5 0 0 0 7.5 1M5 2.499a2.5 2.5 0 1 1 3 2.448v9.025a6.5 6.5 0 0 0 5.981-5.977H12v-1h3v.5a7.5 7.5 0 0 1-7.5 7.496A7.5 7.5 0 0 1 0 7.495v-.5h3v1H1.019A6.5 6.5 0 0 0 7 13.972V4.947A2.5 2.5 0 0 1 5 2.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAnchorSolid;
