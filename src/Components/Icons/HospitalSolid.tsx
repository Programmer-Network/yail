import type { SVGProps } from "react";

const SvgHospitalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.724.053a.5.5 0 0 0-.448 0l-5.99 2.995A.5.5 0 0 0 1 3.5V14H0v1h5v-5h5v5h5v-1h-1V3.5a.5.5 0 0 0-.286-.452zM7 5V3h1v2h2v1H8v2H7V6H5V5z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M9 15v-4H6v4z' />
  </svg>
);
export default SvgHospitalSolid;
