import type { SVGProps } from "react";

const SvgStrikethroughSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 3.781A2.78 2.78 0 0 1 6.781 1H8a3 3 0 0 1 3 3h-1a2 2 0 0 0-2-2H6.781C5.797 2 5 2.797 5 3.781c0 .843.502 1.605 1.277 1.937l-.394.919A3.11 3.11 0 0 1 4 3.78M9.392 8H2V7h11v1h-2.01q.185.21.34.44c.406.602.67 1.326.67 2.047A3.513 3.513 0 0 1 8.487 14H7a4 4 0 0 1-4-4h1a3 3 0 0 0 3 3h1.487A2.513 2.513 0 0 0 11 10.487c0-.484-.182-1.017-.5-1.488-.296-.44-.69-.797-1.108-.999'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgStrikethroughSolid;
