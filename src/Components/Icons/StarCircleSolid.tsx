import type { SVGProps } from "react";

const SvgStarCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m7.5-4a.5.5 0 0 1 .453.288L8.92 5.85l2.155.33a.5.5 0 0 1 .282.843L9.784 8.636l.373 2.284a.5.5 0 0 1-.736.518L7.5 10.376l-1.921 1.062a.5.5 0 0 1-.736-.519l.373-2.283-1.574-1.613a.5.5 0 0 1 .283-.844l2.154-.329.968-2.062A.5.5 0 0 1 7.5 3.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgStarCircleSolid;
