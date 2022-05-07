import React from "react";

import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";

import Services from "../Services/Services";
import WhyToChooseUs from "../WhyToChooseUs/WhyToChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <Services></Services>
      <WhyToChooseUs></WhyToChooseUs>
    </div>
  );
};

export default Home;
