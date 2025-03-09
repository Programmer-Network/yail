import type { SVGProps } from "react";

const SvgAppointmentsSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAppointmentsSolid;
