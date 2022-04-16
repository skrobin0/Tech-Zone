import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from '../../Shared/Header/Header'
import HomeShop from "../../Shop/Home-Shop/HomeShop";
import Hero from "../Hero Area/Hero";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <HomeShop></HomeShop>
      <Footer></Footer>
    </div>
  );
};

export default Home;
