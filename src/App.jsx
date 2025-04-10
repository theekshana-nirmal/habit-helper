import { useState } from "react";

import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import CTA from "./components/sections/CTA";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
