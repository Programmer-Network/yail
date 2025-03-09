import type { SVGProps } from "react";

const SvgBasketPlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m2.449 14.398.447-.224zm10.102 0 .447.224zM.703 6h13.594V5H.703zM14 5.703v.439h1v-.439zM12.386 14H2.614v1h9.772zM1 6.142v-.439H0v.439zm1.896 8.032A17.96 17.96 0 0 1 1 6.142H0c0 2.944.685 5.847 2.002 8.48zM2.614 14c.12 0 .229.068.282.174l-.894.448a.69.69 0 0 0 .612.378zm9.49.174a.32.32 0 0 1 .282-.174v1c.26 0 .496-.146.612-.378zM14 6.142c0 2.788-.65 5.538-1.896 8.032l.894.448A18.96 18.96 0 0 0 15 6.142zM14.297 6A.297.297 0 0 1 14 5.703h1A.703.703 0 0 0 14.297 5zM.703 5A.703.703 0 0 0 0 5.703h1A.297.297 0 0 1 .703 6zm3.226.757 3-5L6.07.243l-3 5zm4.142-5 3 5 .858-.514-3-5zM7 7v5h1V7zm-2 3h5V9H5z'
    />
  </svg>
);
export default SvgBasketPlusOutline;
