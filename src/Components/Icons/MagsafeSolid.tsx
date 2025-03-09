import type { SVGProps } from "react";

const SvgMagsafeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M12 0H3v3h9zM14 4H1v6h3v2h1v3h1v-3h3v3h1v-3h1v-2h3z'
    />
  </svg>
);
export default SvgMagsafeSolid;
