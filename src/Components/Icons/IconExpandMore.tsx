import type { SVGProps } from "react";
const SvgIconExpandMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    data-testid='icon-expand-more'
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='none' d='M24 24H0V0h24z' opacity={0.87} />
    <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z' />
  </svg>
);
export default SvgIconExpandMore;
