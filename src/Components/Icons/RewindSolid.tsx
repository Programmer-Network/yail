import type { SVGProps } from "react";

const SvgRewindSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8 2.5a.5.5 0 0 0-.79-.407l-7 5a.5.5 0 0 0 0 .814l7 5A.5.5 0 0 0 8 12.5V8.472l6.21 4.435A.5.5 0 0 0 15 12.5v-10a.5.5 0 0 0-.79-.407L8 6.528z'
    />
  </svg>
);
export default SvgRewindSolid;
