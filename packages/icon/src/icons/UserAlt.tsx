import * as React from "react";
import type { SVGProps } from "react";
const SvgUserAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="icon"
    {...props}
  >
    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
  </svg>
);
export default SvgUserAltIcon;
