import { FC } from "react";
import "../../constants/styles/homePage.scss";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import SlideShow from "./components/SlideShow/SlideShow.tsx";
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.tsx";

const Home: FC = () => {
  return (
    <div className="content">
      <HeroSection />
      <SlideShow />
      <AboutUs />
      <Testimonials />
      <ContactInfo />
    </div>
  );
};

export default Home;
