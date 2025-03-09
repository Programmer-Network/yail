import type { SVGProps } from "react";

const SvgBuildingOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.224-.447a.5.5 0 0 0-.448 0zm-3 8V8H4v.5zm4 0H9V8h-.5zM0 15h15v-1H0zM7.276.053l-6 3 .448.894 6-3zM0 6h15V5H0zm13.724-2.947-6-3-.448.894 6 3zM1 5.5v9h1v-9zm12 0v9h1v-9zm-8 9v-6H4v6zM4.5 9h4V8h-4zM8 8.5v6h1v-6z'
    />
  </svg>
);
export default SvgBuildingOutline;
