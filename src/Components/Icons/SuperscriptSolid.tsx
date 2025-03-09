import type { SVGProps } from "react";

const SvgSuperscriptSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 1.5A1.5 1.5 0 0 1 13.5 0h.293a1.207 1.207 0 0 1 .854 2.06l-.94.94H15v1h-2.5a.5.5 0 0 1-.354-.854l1.793-1.792A.207.207 0 0 0 13.793 1H13.5a.5.5 0 0 0-.5.5zm-6.625 6L1.1 1.8l.8-.6L6 6.667 10.1 1.2l.8.6-4.275 5.7 4.275 5.7-.8.6L6 8.333 1.9 13.8l-.8-.6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSuperscriptSolid;
