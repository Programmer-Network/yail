import type { SVGProps } from "react";

const SvgTextDocumentSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm3 2.497L9 4v1l-5-.003zm7 2.998H4v1h7zm0 3.006-7-.008v1L11 11z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTextDocumentSolid;
