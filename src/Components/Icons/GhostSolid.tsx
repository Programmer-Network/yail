import type { SVGProps } from "react";

const SvgGhostSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6.5a6.5 6.5 0 0 1 13 0v6.586a1.914 1.914 0 0 1-3.268 1.353l-.086-.085A1.2 1.2 0 0 0 9.793 14h-.086c-.32 0-.627.127-.853.354l-.147.146a1.707 1.707 0 0 1-2.414 0l-.147-.146A1.2 1.2 0 0 0 5.293 14h-.086c-.32 0-.627.127-.853.354l-.086.085A1.914 1.914 0 0 1 1 13.086zM5 6h1V5H5zm4 0h1V5H9zM4.9 7.7a3.25 3.25 0 0 0 5.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGhostSolid;
