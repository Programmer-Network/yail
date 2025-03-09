import type { SVGProps } from "react";

const SvgAlienOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='M6.52 11.435c.24.107.719.497.981.497.263 0 .741-.39.982-.497m-3.926-4.97 1.472 1.49m4.417-1.49-1.472 1.49M7.5.5c-3.56 0-5.533 1.95-5.888 4.474-.358 2.33.136 4.53 1.472 6.461.643.953 1.486 1.876 2.454 2.486 1.271.772 2.654.772 3.925 0 .967-.61 1.81-1.533 2.454-2.486 1.33-1.934 1.824-4.13 1.472-6.461C13.034 2.449 11.062.5 7.501.5Z'
    />
  </svg>
);
export default SvgAlienOutline;
