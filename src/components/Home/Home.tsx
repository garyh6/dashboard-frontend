import React from "react";
import BoxSection from "./BoxSection";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import MainNav from "./MainNav";
import Portfolio from "./Portfolio";
import TopContainer from "./TopContainer";

const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* <Link href="/dashboard">Dashboard</Link> */}
      <div className="wrapper">
        <MainNav></MainNav>
        <TopContainer></TopContainer>
        <BoxSection></BoxSection>
        <InfoSection></InfoSection>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
