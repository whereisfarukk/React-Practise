import React from "react";
import "./Footer.css";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Content">
        <Row1 />
        <Row2 />
      </div>
    </div>
  );
}
