import type { SVGProps } from "react";

const SvgMessageTickOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m5.5 11.493.416-.278a.5.5 0 0 0-.416-.222zm2 2.998-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zM7 8l-.354.354.378.377.352-.402zm-1.916 3.77 2 2.998.832-.555-2-2.998zm2.832 2.998 2-2.998-.832-.555-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5C15 .67 14.329 0 13.5 0v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zm3.146-5.64 2 2 .708-.707-2-2zm2.73 1.976 3.5-4-.752-.658-3.5 4z'
    />
  </svg>
);
export default SvgMessageTickOutline;
