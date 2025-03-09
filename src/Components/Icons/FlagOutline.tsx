import type { SVGProps } from "react";

const SvgFlagOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m14.5.5.457.203A.5.5 0 0 0 14.5 0zM.5.5V0a.5.5 0 0 0-.5.5zm14 9v.5a.5.5 0 0 0 .457-.703zm-2-4.5-.457-.203a.5.5 0 0 0 0 .406zm2-5H.5v1h14zM0 .5v9h1v-9zM.5 10h14V9H.5zm14.457-.703-2-4.5-.914.406 2 4.5zm-2-4.094 2-4.5-.914-.406-2 4.5zM1 15V9.5H0V15z'
    />
  </svg>
);
export default SvgFlagOutline;
