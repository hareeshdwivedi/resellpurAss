import React from "react";

import { pageContent as data } from "../../../data/data";
import Tab from "../../Tab";
import TabPanel from "../../TabPanel";

const IntroSection = () => {
  return (
    <section className="my-11 mx-6 sm:m-14 sm:px-24 relative" id="about">
      <h2 className="text-center text-2xl font-bold text-secondary sm:text-4xl mb-2 sm:mb-6">
        {data.s1.title}
      </h2>
      <p className="text-center text-sm sm:text-base mb-8 sm:mx-32 sm:mb-12">
        {data.s1.subTitle}
      </p>
      <Tab data={data.s1.tabs}>
        {data.s1.tabData.map((t, i) => (
          <TabPanel data={t} key={i} />
        ))}
      </Tab>
      <div
        className="absolute top-96 -left-10 sm:top-12 sm:-left-16 w-52 h-28 sm:w-[550px] sm:h-80 bg-white opacity-30 -z-10"
        style={{
          backgroundImage: "radial-gradient(#D3D3D3 2.5px, #fff 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </section>
  );
};

export default IntroSection;
