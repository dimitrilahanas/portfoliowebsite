import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
