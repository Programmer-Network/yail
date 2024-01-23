import type { SVGProps } from "react";

const SvgIconSpinner2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path fill='currentColor' d='M1 4h6v14H1z'>
      <animate
        id='icon-spinner-2_svg__b'
        fill='freeze'
        attributeName='opacity'
        begin='0;a.end-0.25s'
        dur='0.75s'
        values='1;.2'
      />
    </path>
    <path fill='currentColor' d='M9 4h6v14H9z' opacity={0.4}>
      <animate
        fill='freeze'
        attributeName='opacity'
        begin='b.begin+0.15s'
        dur='0.75s'
        values='1;.2'
      />
    </path>
    <path fill='currentColor' d='M17 4h6v14h-6z' opacity={0.3}>
      <animate
        id='icon-spinner-2_svg__a'
        fill='freeze'
        attributeName='opacity'
        begin='b.begin+0.3s'
        dur='0.75s'
        values='1;.2'
      />
    </path>
  </svg>
);
export default SvgIconSpinner2;
