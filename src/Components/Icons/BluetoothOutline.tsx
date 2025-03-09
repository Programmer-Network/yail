import type { SVGProps } from "react";

const SvgBluetoothOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 14.5H7a.5.5 0 0 0 .787.41zm0-14 .287-.41A.5.5 0 0 0 7 .5zm5 3.5.282.413a.5.5 0 0 0 .005-.823zm0 7 .287.41a.5.5 0 0 0-.005-.823zM8 14.5V7.41H7v7.09zm0-7.09V.5H7v6.91zM7.213.91l5 3.5.574-.82-5-3.5zm5.005 2.677-5 3.409.564.826 5-3.409zm-5 3.409-6 4.09.564.827 6-4.09zm.569 7.914 5-3.5-.574-.82-5 3.5zm4.995-4.323-11-7.5-.564.826 11 7.5z'
    />
  </svg>
);
export default SvgBluetoothOutline;
