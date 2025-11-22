import type { SVGProps } from "react";

const SvgIconSpinner2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <style>{"@keyframes spinner_PBVY{to{transform:rotate(360deg)}}"}</style>
    <path
      d='M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8'
      opacity={0.25}
    />
    <circle
      cx={12}
      cy={2.5}
      r={1.5}
      style={{
        transformOrigin: "center",
        animation: "spinner_PBVY .75s linear infinite"
      }}
    />
  </svg>
);
export default SvgIconSpinner2;
