import type { SVGProps } from "react";

const SvgDragSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1H0V0h1zm4 0H4V0h1zm4 0H8V0h1zM3 3h11v4h-1V4H4v9h3v1H3zM1 5H0V4h1zm6.146 2.146a.5.5 0 0 1 .491-.127l7 2a.5.5 0 0 1 .06.94l-3.316 1.422-1.421 3.316a.5.5 0 0 1-.94-.06l-2-7a.5.5 0 0 1 .126-.49m1.082 1.082 1.366 4.782.946-2.207a.5.5 0 0 1 .263-.263l2.207-.946zM1 9H0V8h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDragSolid;
