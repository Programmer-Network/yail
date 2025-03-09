import type { SVGProps } from "react";

const SvgDiscountOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M5 5.5h1m3 4h1M10 5l-5 5M6.801.79 5.672 1.917a1 1 0 0 1-.698.29H3.196a.99.99 0 0 0-.988.988v1.778a1 1 0 0 1-.29.698L.79 6.802a.99.99 0 0 0 0 1.397l1.13 1.129c.185.185.289.436.289.698v1.778c0 .546.442.988.988.988h1.778c.262 0 .513.104.698.29l1.13 1.129a.99.99 0 0 0 1.397 0l1.129-1.13a1 1 0 0 1 .698-.289h1.778a.99.99 0 0 0 .988-.988v-1.778c0-.262.104-.513.29-.698l1.129-1.13a.99.99 0 0 0 0-1.397l-1.13-1.129a1 1 0 0 1-.289-.698V3.196a.99.99 0 0 0-.988-.988h-1.778a1 1 0 0 1-.698-.29L8.198.79a.99.99 0 0 0-1.397 0Z'
    />
  </svg>
);
export default SvgDiscountOutline;
