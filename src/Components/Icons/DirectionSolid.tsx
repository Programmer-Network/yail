import type { SVGProps } from "react";

const SvgDirectionSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.697.04A.5.5 0 0 0 .04.697l6 14a.5.5 0 0 0 .934-.039l1.921-5.763 5.763-1.92a.5.5 0 0 0 .039-.935z'
    />
  </svg>
);
export default SvgDirectionSolid;
