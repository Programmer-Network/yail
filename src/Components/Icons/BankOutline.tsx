import type { SVGProps } from "react";

const SvgBankOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.224-.447a.5.5 0 0 0-.448 0zM0 15h15v-1H0zM7.276.053l-6 3 .448.894 6-3zM0 6h15V5H0zm13.724-2.947-6-3-.448.894 6 3zM5 8v4h1V8zm4 0v4h1V8zM1 5.5v9h1v-9zm12 0v9h1v-9z'
    />
  </svg>
);
export default SvgBankOutline;
