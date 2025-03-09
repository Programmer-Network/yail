import type { SVGProps } from "react";

const SvgLoaderSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 .5V5H7V.5zM5.146 5.854l-3-3 .708-.708 3 3zm4-.708 3-3 .708.708-3 3zm.855 1.849L14.5 7l-.002 1-4.5-.006zm-9.501 0H5v1H.5zm5.354 2.859-3 3-.708-.708 3-3zm6.292 3-3-3 .708-.708 3 3zM8 10v4.5H7V10z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLoaderSolid;
