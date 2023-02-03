/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/Footer";
import "aos/dist/aos.css";

export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  );
}
