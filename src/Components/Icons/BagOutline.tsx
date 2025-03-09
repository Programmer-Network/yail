import type { SVGProps } from "react";

const SvgBagOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m2.401 6.39-.497-.056zm-.778 7 .497.055zm11.754 0-.497.055zm-.778-7 .497-.056zM1.904 6.334l-.778 7 .994.11.778-7zM2.617 15h9.766v-1H2.617zm11.257-1.666-.778-7-.994.11.778 7zM11.604 5H3.396v1h8.21zm1.492 1.334A1.5 1.5 0 0 0 11.605 5v1a.5.5 0 0 1 .497.445zM12.383 15a1.5 1.5 0 0 0 1.49-1.666l-.993.11a.5.5 0 0 1-.497.556zM1.126 13.334A1.5 1.5 0 0 0 2.617 15v-1a.5.5 0 0 1-.497-.555zm1.772-6.89A.5.5 0 0 1 3.395 6V5a1.5 1.5 0 0 0-1.49 1.334zM5 4v-.5H4V4zm5-.5V4h1v-.5zM7.5 1A2.5 2.5 0 0 1 10 3.5h1A3.5 3.5 0 0 0 7.5 0zM5 3.5A2.5 2.5 0 0 1 7.5 1V0A3.5 3.5 0 0 0 4 3.5z'
    />
  </svg>
);
export default SvgBagOutline;
