import type { SVGProps } from "react";

const SvgLinkRemoveSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 3V0h1v3zM9.318.975a3.328 3.328 0 1 1 4.707 4.707l-3.171 3.172-.708-.708 3.172-3.171a2.328 2.328 0 1 0-3.293-3.293L6.854 4.854l-.708-.708zM0 4h3v1H0zm10.854.854-6 6-.708-.708 6-6zm-6 2-3.172 3.171a2.329 2.329 0 0 0 3.293 3.293l3.171-3.172.708.708-3.172 3.171A3.328 3.328 0 1 1 .975 9.318l3.171-3.172zM15 11h-3v-1h3zm-5 4v-3h1v3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLinkRemoveSolid;
