import type { SVGProps } from "react";

const SvgWebpackSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m8 4.217 2.25 1.35 3.268-1.635L8 .712zM7 .713 1.482 3.932 4.75 5.566 7 4.216zM1 4.809v5.422l3.5-1.556V6.56zM1.523 11.092 7 14.287v-3.504l-2.034-1.22zM8 14.287l5.477-3.195-3.443-1.53L8 10.783zM14 10.23V4.81l-3.5 1.75v2.116zM8 9.617l1.5-.9V7.059l-1.5.75zM7 7.809v1.808l-1.5-.9V7.059zM5.811 6.096l1.689.845 1.689-.845L7.5 5.083z'
    />
  </svg>
);
export default SvgWebpackSolid;
