import type { SVGProps } from "react";

const SvgHistorySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 6.965 7.481l.053-.998.49.017a6.5 6.5 0 1 0-4.65-1.951l.006.007.136.15V10h1v4H0v-1h2.37l-.234-.258A7.48 7.48 0 0 1 0 7.5m7 0V3h1v4.293l2.854 2.853-.708.708-3-3A.5.5 0 0 1 7 7.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHistorySolid;
