import type { SVGProps } from "react";

const SvgWanOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m3.5 14.5-.489.105a.5.5 0 0 0 .967.042zm4-13 .478-.147a.5.5 0 0 0-.956 0zm4 13-.478.147a.5.5 0 0 0 .967-.042zM.011.605l3 14 .978-.21-3-14zm3.967 14.042 4-13-.956-.294-4 13zm3.044-13 4 13 .956-.294-4-13zm4.967 12.958 3-14-.978-.21-3 14zM0 6h15V5H0zm0 4h15V9H0z'
    />
  </svg>
);
export default SvgWanOutline;
