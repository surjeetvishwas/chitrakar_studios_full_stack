import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div><Carousal/></div>
      <div className="m-3">
        <Card/>
      </div>
      <Footer></Footer>
    </div>
  );
}
