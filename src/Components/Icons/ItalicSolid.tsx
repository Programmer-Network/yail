import type { SVGProps } from "react";

const SvgItalicSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.91 2H4V1h9v1H8.924L7.09 13H11v1H2v-1h4.076z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgItalicSolid;
