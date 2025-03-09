import type { SVGProps } from "react";

const SvgBorderAllSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h13v13H1zm1 1v5h5V2zm6 0v5h5V2zm5 6H8v5h5zm-6 5V8H2v5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderAllSolid;
