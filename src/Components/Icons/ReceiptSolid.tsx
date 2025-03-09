import type { SVGProps } from "react";

const SvgReceiptSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgReceiptSolid;
