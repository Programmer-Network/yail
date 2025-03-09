import type { SVGProps } from "react";

const SvgBackspaceSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.11 2.188A.5.5 0 0 1 4.5 2h9A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-9a.5.5 0 0 1-.39-.188l-4-5a.5.5 0 0 1 0-.624zm6.036 7.666L8.5 8.207 6.854 9.854l-.708-.708L7.793 7.5 6.146 5.854l.708-.708L8.5 6.793l1.646-1.647.708.708L9.207 7.5l1.647 1.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBackspaceSolid;
