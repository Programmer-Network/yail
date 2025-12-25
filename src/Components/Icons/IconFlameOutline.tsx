import type { SVGProps } from "react";

const SvgIconFlameOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 10.941c2.333-3.308.167-7.823-1-8.941 0 3.395-2.235 5.299-3.667 6.706C5.903 10.114 5 12.327 5 14.294 5 17.998 8.134 21 12 21s7-3.002 7-6.706c0-1.712-1.232-4.403-2.333-5.588-2.084 3.353-3.257 3.353-4.667 2.235'
    />
  </svg>
);
export default SvgIconFlameOutline;
