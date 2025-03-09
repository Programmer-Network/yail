import type { SVGProps } from "react";

const SvgLoaderOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8 1V.5H7V1zM7 4.5V5h1v-.5zm1 6V10H7v.5zM7 14v.5h1V14zM4.5 7.995H5v-1h-.5zm-3.5-1H.5v1H1zM14 8h.5V7H14zm-3.5-1.005H10v1h.5zM7 1v3.5h1V1zm0 9.5V14h1v-3.5zM4.5 6.995H1v1h3.5zM14 7l-3.5-.005v1L14 8zM2.147 2.854l3 3 .708-.708-3-3zm10-.708-3 3 .708.708 3-3zM2.854 12.854l3-3-.708-.708-3 3zm6.292-3 3 3 .708-.708-3-3z'
    />
  </svg>
);
export default SvgLoaderOutline;
