import React from "react";

export default function NextPage({ style }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <g clipPath="url(#clip0_16_169)">
          <path
            d="M11.1707 7.68262L18.4878 14.9997L11.1707 22.3168"
            stroke={style?.color || "black"}
            strokeWidth="2.43902"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_169">
            <rect
              width="29.2683"
              height="29.2683"
              fill="white"
              transform="translate(0.195129 0.365723)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
