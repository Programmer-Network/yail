import type { SVGProps } from "react";

const SvgFlipVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 3.5H5a.5.5 0 0 0-.947-.224zm0 8v.5a.5.5 0 0 0 .5-.5zm-4 0-.447-.224A.5.5 0 0 0 .5 12zm10-8 .447-.224A.5.5 0 0 0 10 3.5zm0 8H10a.5.5 0 0 0 .5.5zm4 0v.5a.5.5 0 0 0 .447-.724zM4 3.5v8h1v-8zm.5 7.5h-4v1h4zm-3.553.724 4-8-.894-.448-4 8zM10 3.5v8h1v-8zm.5 8.5h4v-1h-4zm4.447-.724-4-8-.894.448 4 8zM7 0v15h1V0z'
    />
  </svg>
);
export default SvgFlipVerticalOutline;
