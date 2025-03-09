import type { SVGProps } from "react";

const SvgSvgSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM5 6H2v3h2v1H2v1h3V8H3V7h2zm2 0H6v3.707l1.5 1.5 1.5-1.5V6H8v3.293l-.5.5-.5-.5zm3 0h3v1h-2v3h1V8.5h1V11h-3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSvgSolid;
