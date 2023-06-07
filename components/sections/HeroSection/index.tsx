import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

import { pageContent as data } from "../../../data/data";
import Nav from "../../Nav";

const HeroSection = () => {
  const [ref, inView] = useInView();
  return (
    <section
      className={`pb-28 bg-cover bg-center h-screen hero-section-background`}
    >
      {/* Navbar  */}
      <Nav inView={inView} />
      <div className="p-6 sm:py-8 sm:mx-0 sm:px-12">
        <div className="sm:mx-4">
          <h1 className="font-bold max-w-sm sm:max-w-3xl mt-6 sm:mt-20 mb-5 tracking-wide text-4xl sm:text-6xl md:text-5xl xl:text-6xl text-white sm:!leading-[1.2]">
            {data.heroTitle}
          </h1>
          <p className="font-medium max-w-[18rem] sm:max-w-2xl mb-6  text-[#dedede] text-sm lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            {data.heroDescription}
          </p>
          <div className="flex justify-between sm:w-max">
            <button className="bg-theme_green rounded-[10px] py-2 px-8 sm:px-6 uppercase  text-[color:white] text-sm font-base sm:mt-8 hover:bg-button_hover">
              <Link href="#" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[172px] font-base text-sm text-white uppercase no-underline"
                >
                  Buy From Here
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
