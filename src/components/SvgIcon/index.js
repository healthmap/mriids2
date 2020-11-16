import React from "react";
import * as icons from "../../assets/icons";

const SvgIcon = ({ size, title, icon }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 100 100"
    role="img"
    alt={title}
    aria-hidden="true"
    style={{ width: size + "px", height: size + "px" }}
  >
    <g>
      <title>{title}</title>
      <path d={icons[icon]} fill="#000000" />
    </g>
  </svg>
);

export default SvgIcon;
