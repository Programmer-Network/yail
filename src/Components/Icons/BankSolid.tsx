import type { SVGProps } from "react";

const SvgBankSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.724.053a.5.5 0 0 0-.448 0l-6 3 .448.894L7.5 1.06l5.776 2.888.448-.894z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14 6h1V5H0v1h1v8H0v1h15v-1h-1zm-9 6V8h1v4zm4 0V8h1v4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBankSolid;
