import React from "react";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import mens_perfume from "../Data/Men/mens_perfume";
import female_perfume from "../Data/Women/female_perfume";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_perfume} section = {"Men's Perfume"} />
        <HomeProductSection data={female_perfume} section = {"Female's Perfume"} />
      
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
