import type { SVGProps } from "react";

const SvgJavascriptSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 0H0v15h15zM8 8a2 2 0 0 1 2-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0 0 11.167 7H10a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-1a2 2 0 0 1-2-2M6 6v5a1 1 0 1 1-2 0H3a2 2 0 1 0 4 0V6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgJavascriptSolid;
