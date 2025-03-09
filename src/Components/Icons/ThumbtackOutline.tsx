import type { SVGProps } from "react";

const SvgThumbtackOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 14.5 5 10M.5 5.5l9 9m-1-14 6 6m-13 0 8-5m-1 12 5-8'
    />
  </svg>
);
export default SvgThumbtackOutline;
