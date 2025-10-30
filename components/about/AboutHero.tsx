'use client';

import Expertise from "./OurExpertise";
import Solutions from "./OurSolutions";
import WhyChooseUs from "./WhyChooseUs";
import FixedImageHero from "@/commonComponent/HeroSection";

const AboutHero = () => {
  return (<>
    <FixedImageHero imageUrl={"/assets/chooseUs.jpg"} title="About-Us"/>
    <Expertise/>
    <Solutions/>
    <WhyChooseUs/>
    {/* <CareerContainer/> */}
</>  
);
};

export default AboutHero;
