import * as React from "react";
import type { SVGProps } from "react";
const SvgCollectionIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2M5 20v-8h14l.002 8zM5 6h14v2H5zm2-4h10v2H7z" />
  </svg>
);
export default SvgCollectionIcon;
