import type { SVGProps } from "react";

const SvgCalendarXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.5 2H12V0h-1v2H4V0H3v2H1.5A1.5 1.5 0 0 0 0 3.5v10A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 2m-4.354 8.854L7.5 9.207l-1.646 1.646-.708-.707L6.793 8.5 5.146 6.854l.708-.708L7.5 7.793l1.646-1.647.708.708L8.207 8.5l1.647 1.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCalendarXSolid;
