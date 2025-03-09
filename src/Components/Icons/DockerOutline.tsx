import type { SVGProps } from "react";

const SvgDockerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5 5.5V5H0v.5zm2-2V3H2v.5zm4-2V1H6v.5zm2 0H9V1h-.5zm4 6H12V8h.5zM1 7.5v-2H0v2zm2 0v-4H2v4zM2.5 4h6V3h-6zM8 3.5v4h1v-4zm-3 4v-4H4v4zm2 0v-6H6v6zM6.5 2h2V1h-2zM8 1.5v2h1v-2zm5.736 8.5H15V9h-1.264zM10 5v.5h1V5zm2 1.5v1h1v-1zm.5 1.5h1V7h-1zm1.5.5v1h1v-1zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 7zm-2-2a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 11.5 5zM3 10h1V9H3zm5.5-3h-8v1h8zM0 7.5v1h1v-1zM5.5 14h.528v-1H5.5zm.528 0a7.74 7.74 0 0 0 6.23-3.15l-.805-.593A6.74 6.74 0 0 1 6.028 13zM0 8.5A5.5 5.5 0 0 0 5.5 14v-1A4.5 4.5 0 0 1 1 8.5zM.5 6h11V5H.5zm9.5-.5A1.5 1.5 0 0 1 8.5 7v1A2.5 2.5 0 0 0 11 5.5zM13.736 9c-.96 0-1.769.558-2.283 1.257l.806.593c.383-.522.922-.85 1.477-.85z'
    />
  </svg>
);
export default SvgDockerOutline;
