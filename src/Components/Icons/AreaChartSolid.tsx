import type { SVGProps } from "react";

const SvgAreaChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1 0H0v15h15V2.5a.5.5 0 0 0-.907-.29L9.49 8.653 6.9 5.2a.5.5 0 0 0-.816.023L1 12.849z'
    />
  </svg>
);
export default SvgAreaChartSolid;
