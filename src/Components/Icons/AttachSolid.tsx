import type { SVGProps } from "react";

const SvgAttachSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.318.975a3.328 3.328 0 1 1 4.707 4.707l-5.757 5.757A1.914 1.914 0 1 1 3.56 8.732l5.585-5.586.708.708-5.586 5.585a.914.914 0 1 0 1.293 1.293l5.757-5.757a2.328 2.328 0 1 0-3.293-3.293L2.096 7.611a3.743 3.743 0 0 0 5.293 5.293l5.757-5.758.708.708-5.758 5.757A4.743 4.743 0 0 1 1.39 6.904z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAttachSolid;
