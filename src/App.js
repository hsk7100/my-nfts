import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopFold from "./components/TopFold";
import BrandIntegration from "./components/BrandIntegration";
import TrendingNfts from "./components/TrendingNfts";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-width">
      <Header />
      <TopFold />
      <BrandIntegration />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default App;
