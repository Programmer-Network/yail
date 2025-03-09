import type { SVGProps } from "react";

const SvgVueOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 13.5-.432.252a.5.5 0 0 0 .864 0zm4-12 .434.248A.5.5 0 0 0 11.5 1zm-4 7-.434.248a.5.5 0 0 0 .868 0zm-4-7V1a.5.5 0 0 0-.434.748zm3 0 .447-.224L6.81 1H6.5zm1 2-.447.224a.5.5 0 0 0 .894 0zm1-2V1h-.309l-.138.276zm-8.432.252 7 12 .864-.504-7-12zm7.864 12 7-12-.864-.504-7 12zm3.134-12.5-4 7 .868.496 4-7zm-3.132 7-4-7-.868.496 4 7zM3.5 2h3V1h-3zm2.553-.276 1 2 .894-.448-1-2zm1.894 2 1-2-.894-.448-1 2zM8.5 2h3V1h-3z'
    />
  </svg>
);
export default SvgVueOutline;
