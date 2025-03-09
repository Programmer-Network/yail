import type { SVGProps } from "react";

const SvgNgcSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.117 3.005a11.58 11.58 0 0 0-9.234 0A3.065 3.065 0 0 0 0 6.065v6.199a1.736 1.736 0 0 0 3.289.776l.516-1.033A2.422 2.422 0 0 0 7.13 9.133L6.806 8h1.388l-.323 1.133a2.422 2.422 0 0 0 3.324 2.874l.516 1.033A1.736 1.736 0 0 0 15 12.264V6.065a3.065 3.065 0 0 0-2.883-3.06m-7.473.433c.65.39 1.15 1.018 1.368 1.785L6.52 7h1.96l.508-1.777a3.06 3.06 0 0 1 1.368-1.785 10.6 10.6 0 0 0-5.712 0M14 8.925l-1.909 2.386-.08.095.595 1.187a.736.736 0 0 0 1.394-.33zm-11.012 2.48-.08-.094L1 8.925v3.339a.736.736 0 0 0 1.394.33z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgNgcSolid;
