import type { SVGProps } from "react";

const SvgTickSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m11.39 5.312-4.318 5.399L3.68 7.884l.64-.768 2.608 2.173 3.682-4.601z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTickSmallSolid;
