import type { SVGProps } from "react";

const SvgCodepenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.21.093a.5.5 0 0 1 .58 0l7 5A.5.5 0 0 1 15 5.5v4a.5.5 0 0 1-.21.407l-7 5a.5.5 0 0 1-.58 0l-7-5A.5.5 0 0 1 0 9.5v-4a.5.5 0 0 1 .21-.407zM1 6.472 2.44 7.5 1 8.528zM1.36 9.5 7 13.528v-2.77L3.3 8.113zm2.8-2L7.5 9.886 10.84 7.5 7.5 5.114zM8 4.243l3.7 2.643L13.64 5.5 8 1.472zM7 1.472v2.77L3.3 6.887 1.36 5.5zm7 5L12.56 7.5 14 8.528zM13.64 9.5 11.7 8.114 8 10.757v2.771z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCodepenSolid;
