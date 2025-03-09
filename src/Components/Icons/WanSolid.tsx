import type { SVGProps } from "react";

const SvgWanSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M.953 5 .01.605.99.395 1.976 5H5.9l1.122-3.647a.5.5 0 0 1 .956 0L9.1 5h3.924l.987-4.605.978.21L14.047 5H15v1h-1.167l-.643 3H15v1h-2.024l-.987 4.605a.5.5 0 0 1-.967.042L9.592 10H5.408l-1.43 4.647a.5.5 0 0 1-.967-.042L2.024 10H0V9h1.81l-.643-3H0V5zM2.19 6l.643 3h1.836l.923-3zm4.449 0-.924 3h3.57L8.36 6zm1.415-1L7.5 3.2 6.946 5zm1.354 1 .923 3h1.836l.643-3zm2.545 4h-1.314l.774 2.518zM4.36 10H3.047l.54 2.518z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgWanSolid;
