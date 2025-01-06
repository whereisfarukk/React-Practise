import React from "react";

export default function Quote() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#000929" />
        {/* Adding the double apostrophe inside the circle */}
        <text
          x="50%"
          y="75%"
          textAnchor="middle"
          fontSize="32"
          fontWeight="bold"
          fill="white"
          dy=".3em"
        >
          ”
        </text>
      </svg>
    </div>
  );
}
