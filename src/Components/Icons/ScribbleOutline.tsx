import type { SVGProps } from "react";

const SvgScribbleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1.5 5C3 2 7.3.5 6.5 2.5 5.5 5-.5 9.5 3 11c1.343.576 3.055.45 4.654-.05m0 0C10.222 10.145 12.5 8.377 12.5 7 12.5 4.5 9 5.5 8 9c-.206.722-.328 1.381-.346 1.95Zm0 0C7.584 13.133 9.032 13.983 13 12'
    />
  </svg>
);
export default SvgScribbleOutline;
