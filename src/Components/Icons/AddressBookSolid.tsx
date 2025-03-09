import type { SVGProps } from "react";

const SvgAddressBookSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3.5 0A1.5 1.5 0 0 0 2 1.5V4H1v1h1v5H1v1h1v2.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 0zM6 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-1 6a3 3 0 1 1 6 0v1H5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAddressBookSolid;
