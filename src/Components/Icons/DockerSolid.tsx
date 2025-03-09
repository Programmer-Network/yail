import type { SVGProps } from "react";

const SvgDockerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9 1H6v2H2v2H0v3.5A5.5 5.5 0 0 0 5.5 14h.528a7.74 7.74 0 0 0 6.774-4H15V8.5A1.5 1.5 0 0 0 13.5 7H13v-.5A1.5 1.5 0 0 0 11.5 5H9zM1 7h1V6H1zm2 0h1V6H3zm2 0h1V6H5zm2 0h1V6H7zm2 0h1V6H9zM8 3V2H7v1zM6 4H5v1h1zm1 1V4h1v1zM4 5V4H3v1zm-1 5h1V9H3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDockerSolid;
