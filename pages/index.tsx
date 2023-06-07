import type { NextPage } from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

import HeroSection from "../components/sections/HeroSection";
import HowItWorks from "../components/sections/HowItWorks";
import IntroSection from "../components/sections/IntroSection";
import OurMission from "../components/sections/OurMission";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home: NextPage = () => {
  const [ref, inView] = useInView();

  return (
    <div>
      <Head>
        <Seo title={`Resellpur`} />
      </Head>
      <main>
        <HeroSection />
        <IntroSection />
        <WhyChooseUs />
        <HowItWorks />
        <OurMission />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
