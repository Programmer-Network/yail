import type { SVGProps } from "react";

const SvgUsbCableSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11 0H4v6h7zM6 4V2h1v2zm2 0V2h1v2z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M12 7H3v3.5A1.5 1.5 0 0 0 4.5 12H5v2h1v1h1v-1h1v1h1v-1h1v-2h.5a1.5 1.5 0 0 0 1.5-1.5z'
    />
  </svg>
);
export default SvgUsbCableSolid;
