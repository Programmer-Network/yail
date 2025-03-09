import type { SVGProps } from "react";

const SvgYenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6.528 7H3v1h4v3H3v1h4v3h1v-3h4v-1H8V8h4V7H8.472L12.907.79l-.814-.58L7.5 6.64 2.907.21l-.814.58z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgYenSolid;
