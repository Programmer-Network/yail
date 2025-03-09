import type { SVGProps } from "react";

const SvgTwitchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5.5V0a.5.5 0 0 0-.5.5zm14 0h.5a.5.5 0 0 0-.5-.5zm0 8 .354.354A.5.5 0 0 0 15 8.5zm-3 3v.5a.5.5 0 0 0 .354-.146zm-5 0V11a.5.5 0 0 0-.325.12zm-3.5 3h-.5a.5.5 0 0 0 .825.38zm0-3h.5A.5.5 0 0 0 3 11zm-2.5 0H0a.5.5 0 0 0 .5.5zM.5 1h14V0H.5zM14 .5v8h1v-8zm.146 7.646-3 3 .708.708 3-3zM11.5 11h-5v1h5zm-5.325.12-3.5 3 .65.76 3.5-3zM3.5 14.5v-3h-1v3zM3 11H.5v1H3zm-2 .5V.5H0v11zM10 3v5h1V3zM7 3v5h1V3z'
    />
  </svg>
);
export default SvgTwitchOutline;
