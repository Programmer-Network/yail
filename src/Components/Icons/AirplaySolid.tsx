import type { SVGProps } from "react";

const SvgAirplaySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H3v-1H1V2h13v9h-2v1h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5z'
    />
    <path
      fill='currentColor'
      d='M7.854 9.146a.5.5 0 0 0-.708 0l-4 4A.5.5 0 0 0 3.5 14h8a.5.5 0 0 0 .354-.854z'
    />
  </svg>
);
export default SvgAirplaySolid;
