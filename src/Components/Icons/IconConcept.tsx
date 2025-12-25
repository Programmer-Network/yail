import type { SVGProps } from "react";

const SvgIconConcept = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 48 48'
    {...props}
  >
    <g fill='none' stroke='currentColor' strokeWidth={4}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M28.367 36H24l-9-4.96-10.991 4.042 3.002 5.944 7.072-2.953Q24.008 44 26.165 44T44 36'
      />
      <path
        strokeLinejoin='round'
        d='M28.992 26.988v-4.67c1.1-.457 2.543-1.125 3.372-1.954a9 9 0 1 0-12.728 0c.829.829 2.264 1.497 3.364 1.953q.009.503 0 4.67z'
        clipRule='evenodd'
      />
      <path
        strokeLinecap='round'
        d='m12 21 1-1m27 1-1-1M15 5l-1-1m23 1 1-1m3 8h-1m-28 0h-1'
      />
    </g>
  </svg>
);
export default SvgIconConcept;
