import type { SVGProps } from "react";

const SvgPenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.5.5V0H2v.5zm10 0h.5V0h-.5zM4.947 4.724a.5.5 0 0 0-.894-.448zM2.5 8.494l-.447-.223-.146.293.21.251zm5 5.997-.384.32a.5.5 0 0 0 .769 0zm5-5.996.384.32.21-.251-.146-.293zm-1.553-4.219a.5.5 0 0 0-.894.448zM8 9.494v-.5H7v.5zm-.5-4.497A4.5 4.5 0 0 1 3 .5H2a5.5 5.5 0 0 0 5.5 5.497zM2.5 1h10V0h-10zM12 .5a4.5 4.5 0 0 1-4.5 4.497v1c3.038 0 5.5-2.46 5.5-5.497zM4.053 4.276l-2 3.995.895.448 2-3.995zM2.116 8.815l5 5.996.769-.64-5-5.996zm5.768 5.996 5-5.996-.768-.64-5 5.996zm5.064-6.54-2-3.995-.895.448 2 3.995zM8 14.49V9.494H7v4.997z'
    />
  </svg>
);
export default SvgPenOutline;
