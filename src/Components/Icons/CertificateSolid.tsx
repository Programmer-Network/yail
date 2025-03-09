import type { SVGProps } from "react";

const SvgCertificateSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5V5.5l-.8-.601a4.5 4.5 0 0 0-6.3 6.3l.1.134V15H1.5A1.5 1.5 0 0 1 0 13.5zM8 5H3V4h5zM3 8h3V7H3z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11.5 5A3.5 3.5 0 0 0 9 10.95v3.55a.5.5 0 0 0 .8.4l1.7-1.275 1.7 1.275a.5.5 0 0 0 .8-.4v-3.55A3.5 3.5 0 0 0 11.5 5M10 13.5v-1.837c.455.216.963.337 1.5.337s1.045-.12 1.5-.337V13.5l-1.2-.9a.5.5 0 0 0-.6 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCertificateSolid;
