import type { SVGProps } from "react";

const SvgFoldersSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 0A1.5 1.5 0 0 0 3 1.5v7A1.5 1.5 0 0 0 4.5 10h9A1.5 1.5 0 0 0 15 8.5v-5A1.5 1.5 0 0 0 13.5 2H9.707l-2-2z'
    />
    <path
      fill='currentColor'
      d='M12 11H4.5A2.5 2.5 0 0 1 2 8.5V5h-.5A1.5 1.5 0 0 0 0 6.5v7A1.5 1.5 0 0 0 1.5 15h9a1.5 1.5 0 0 0 1.5-1.5z'
    />
  </svg>
);
export default SvgFoldersSolid;
