import type { SVGProps } from "react";

const SvgChurchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3 8.5a.5.5 0 0 0-1 0zm10 0a.5.5 0 0 0-1 0zm-7.5 2V10H5v.5zm4 0h.5V10h-.5zM0 15h15v-1H0zm7.252-9.934-7 4 .496.868 7-4zm7.496 4-7-4-.496.868 7 4zM7 0v2.5h1V0zm0 2.5v3h1v-3zM5 3h2.5V2H5zm2.5 0H10V2H7.5zM2 8.5v6h1v-6zm10 0v6h1v-6zm-6 6v-4H5v4zM5.5 11h4v-1h-4zm3.5-.5v4h1v-4z'
    />
  </svg>
);
export default SvgChurchOutline;
