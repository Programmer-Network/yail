import { SVGProps } from "react";

const IconAdd: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm-8 4V3h18v18H3Zm2-2h14V5H5v14Zm0 0V5v14Z'
    />
  </svg>
);
export default IconAdd;
