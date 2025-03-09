import type { SVGProps } from "react";

const SvgBugSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 3.941V3.5a3.5 3.5 0 1 1 7 0v.441l2.776-1.388.448.894-2.953 1.477.043.086A6.5 6.5 0 0 1 12 7.916V8h3v1h-3v1.5c0 .625-.127 1.22-.358 1.762l2.582 1.29-.448.895-2.627-1.313A4.5 4.5 0 0 1 7.5 15a4.5 4.5 0 0 1-3.65-1.866l-2.626 1.313-.448-.894 2.582-1.291A4.5 4.5 0 0 1 3 10.5V9H0V8h3v-.084a6.5 6.5 0 0 1 .686-2.906l.043-.086L.776 3.447l.448-.894zM5 3.5a2.5 2.5 0 0 1 5 0V4H5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBugSolid;
