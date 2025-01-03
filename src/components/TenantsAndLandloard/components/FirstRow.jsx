import React from "react";
import PreviousPage from "../../icons/PreviousPage";
import NextPage from "../../icons/NextPage";
export default function FirstRow() {
  return (
    <div>
      <div className="row-1">
        <h1>About the Makaan Builders</h1>
        <div className="navigation">
          <div className="togglePage">
            <button
              style={{
                background: "#FAFAFE",
                display: "flex",
                width: "2rem",
                height: "2rem",
                // padding: "15.366px 17.561px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                border: "none",
                borderRadius: "4px",
              }}
            >
              <PreviousPage />
            </button>
            <button
              style={{
                background: "#FAFAFE",
                display: "flex",
                width: "2rem",
                height: "2rem",
                // padding: "15.366px 17.561px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                border: "none",
                borderRadius: "4px",
              }}
            >
              <NextPage />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
