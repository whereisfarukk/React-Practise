import React from "react";
import "./TenantsAndLandloard.css";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
export default function TenantsAndLandloard() {
  return (
    <section className="TenantsAndLandloard-container">
      <div className="TenantsAndLandloard-content">
        <FirstRow />
        <SecondRow />
      </div>
    </section>
  );
}
