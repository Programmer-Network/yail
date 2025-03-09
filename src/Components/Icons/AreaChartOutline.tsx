import type { SVGProps } from "react";

const SvgAreaChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5 14.5H0v.5h.5zm6-9 .4-.3a.5.5 0 0 0-.816.023zm3 4-.4.3a.5.5 0 0 0 .807-.01zM0 0v14.5h1V0zm.5 15H15v-1H.5zm2.416-3.223 4-6-.832-.554-4 6zM6.1 5.8l3 4 .8-.6-3-4zm3.807 3.99 5-7-.814-.58-5 7z'
    />
  </svg>
);
export default SvgAreaChartOutline;
