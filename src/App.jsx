import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefit from "./components/Benefit/Benefit";
import TenantsAndLandloard from "./components/TenantsAndLandloard/TenantsAndLandloard";
import TenantsAndLandloard2 from "./components/TenantsAndLandloard2/TenantsAndLandloard2";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Hero />
        <Benefit />
        <TenantsAndLandloard />
        <TenantsAndLandloard2 />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default App;
