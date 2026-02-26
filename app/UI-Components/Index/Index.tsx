import About from "./About/About";
import Appiontment from "./Appiontment/Appiontment";
import Feature from "./Feature/Feature";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Marcqee from "./Marcqee/Marcqee";
import Project from "./Project/Project";
import SpaicalCare from "./Spaical-Care/SpaicalCare";
import Testimonial from "./Testimonial/Testimonial";
import WhyChoseUs from "./WhyChoseUs/WhyChoseUs";

function Index() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Appiontment />
      <Feature />
      <Marcqee />
      <WhyChoseUs />
      <Project />
      <SpaicalCare />
      <Testimonial />
    </>
  );
}

export default Index;
