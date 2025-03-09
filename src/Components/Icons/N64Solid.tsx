import type { SVGProps } from "react";

const SvgN64Solid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.293 1h4.414l1 1h.793A3.5 3.5 0 0 1 15 5.5v4.838a1.662 1.662 0 0 1-3.24.525L11.14 9h-.735a.5.5 0 0 0-.498.45l-.26 2.607a2.157 2.157 0 0 1-4.294 0l-.26-2.607A.5.5 0 0 0 4.595 9H3.86l-.62 1.863A1.662 1.662 0 0 1 0 10.338V5.5A3.5 3.5 0 0 1 3.5 2h.793zM4 7V6H3V5h1V4h1v1h1v1H5v1zm5-1h1V5H9zm3 0v1h-1V6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgN64Solid;
