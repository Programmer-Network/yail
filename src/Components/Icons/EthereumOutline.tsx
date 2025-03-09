import type { SVGProps } from "react";

const SvgEthereumOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.384-.32a.5.5 0 0 0-.768 0zm-5 6-.384-.32a.5.5 0 0 0-.04.585zm5 8-.424.265a.5.5 0 0 0 .848 0zm5-8 .424.265a.5.5 0 0 0-.04-.585zm-5-2 .186-.464L7.5 3.96l-.186.075zM7.116.18l-5 6 .768.64 5-6zm-5.04 6.585 5 8 .848-.53-5-8zm5.848 8 5-8-.848-.53-5 8zm4.96-8.585-5-6-.768.64 5 6zm-10.198.784 5-2-.372-.928-5 2zm4.628-2 5 2 .372-.928-5-2z'
    />
  </svg>
);
export default SvgEthereumOutline;
