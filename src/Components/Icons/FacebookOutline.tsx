import type { SVGProps } from "react";

const SvgFacebookOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 14.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5'
    />
  </svg>
);
export default SvgFacebookOutline;
