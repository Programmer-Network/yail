import type { SVGProps } from "react";

const SvgCogOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='m5.944.5-.086.437-.329 1.598a5.5 5.5 0 0 0-1.434.823L2.487 2.82l-.432-.133-.224.385L.724 4.923.5 5.31l.328.287 1.244 1.058c-.045.277-.103.55-.103.841s.058.565.103.842L.828 9.395.5 9.682l.224.386 1.107 1.85.224.387.432-.135 1.608-.537c.431.338.908.622 1.434.823l.329 1.598.086.437h3.111l.087-.437.328-1.598a5.5 5.5 0 0 0 1.434-.823l1.608.537.432.135.225-.386 1.106-1.851.225-.386-.329-.287-1.244-1.058c.046-.277.103-.55.103-.842 0-.29-.057-.564-.103-.841l1.244-1.058.329-.287-.225-.386-1.106-1.85-.225-.386-.432.134-1.608.537a5.5 5.5 0 0 0-1.434-.823L9.142.937 9.055.5z'
      clipRule='evenodd'
    />
    <path
      stroke='currentColor'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='M9.5 7.495a2 2 0 0 1-4 0 2 2 0 0 1 4 0Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCogOutline;
