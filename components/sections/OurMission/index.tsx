import React from "react";

import { pageContent as data } from "../../../data/data";

const OurMission = () => {
  return (
    <section
      id="ourmission"
      className="mt-9 sm:mt-16 px-5 sm:px-16 relative h-screen overflow-hidden"
    >
      <h2
        className="text-center text-2xl text-secondary font-bold sm:text-[44px] sm:px-0 lg:px-48 sm:leading-[72px] pb-4"
        dangerouslySetInnerHTML={{ __html: data.s4.title }}
      />
      <div className="flex justify-center">
        <img
          src={data.s4.image}
          alt={data.s4.title}
          //  loading="lazy"
        />
      </div>
      <div
        className="absolute top-40 right-10 w-52 sm:top-48 sm:right-0 sm:w-[830px] sm:h-80 bg-white opacity-30 -z-10"
        style={{
          backgroundImage: "radial-gradient(#D3D3D3 3px, #fff 1px)",
          backgroundSize: "25px 25px",
        }}
      ></div>
      <div className="absolute top-12 sm:top-[400px] -left-2/4 sm:-left-36 bg-white opacity-100 -z-20">
        <img
          src="/bg_ellipse.svg"
          alt="ellipse"
          // loading="lazy"
        />
      </div>
    </section>
  );
};

export default OurMission;
