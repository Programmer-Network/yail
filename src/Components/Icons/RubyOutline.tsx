import type { SVGProps } from "react";

const SvgRubyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14.5 14.5v.5h.5v-.5zm0-14h.5V0h-.5zm-6 0V0h-.207l-.147.146zm-8 8-.354-.354L0 8.293V8.5zm0 6H0v.5h.5zm4-4-.224.447.019.01.02.007zm0-6V4a.5.5 0 0 0-.5.5zm6 0 .464-.186-.008-.019-.009-.019zm4.5 10V.5h-1v14zM14.5 0h-6v1h6zM8.146.146l-8 8 .708.708 8-8zM0 8.5v6h1v-6zM.5 15h14v-1H.5zM14.146.146l-14 14 .708.708 14-14zM5 10.5v-6H4v6zM4.5 5h6V4h-6zm-.186 5.964 10 4 .372-.928-10-4zm5.722-6.278 4 10 .928-.372-4-10zM8.053.724l2 4 .894-.448-2-4zM.276 8.947l4 2 .448-.894-4-2z'
    />
  </svg>
);
export default SvgRubyOutline;
