import type { SVGProps } from "react";

const SvgGlobeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 5.5A6.49 6.49 0 0 0 11.8.625l-.662.75A5.5 5.5 0 1 1 3.834 9.6l-.667.745A6.48 6.48 0 0 0 7 11.98V14H4v1h7v-1H8v-2.019A6.5 6.5 0 0 0 14 5.5'
    />
    <path fill='currentColor' d='M7.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7' />
  </svg>
);
export default SvgGlobeSolid;
