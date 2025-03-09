import type { SVGProps } from "react";

const SvgCOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m10 5.5-.068-.068a3.18 3.18 0 0 0-2.25-.932H7.5a3 3 0 0 0 0 6h.182c.844 0 1.653-.335 2.25-.932L10 9.5m-8.5 1v-6l6-3.5 6 3.5v6l-6 3.5z'
    />
  </svg>
);
export default SvgCOutline;
