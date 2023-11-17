import { SVGProps } from "react";

const IconArrowRight: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    viewBox='0 0 24 24'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path fill='none' d='M0 0h24v24H0V0z' />
    <path d='M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z' />
  </svg>
);
export default IconArrowRight;
