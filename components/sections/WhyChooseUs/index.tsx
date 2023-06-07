import Image from "next/image";
import React from "react";

import { pageContent as data } from "../../../data/data";
import MeasuresCard from "../../MeasuresCard";

const WhyChooseUs = () => {
  return (
    <section
      className="bg-gray-bg px-5 py-8 sm:pl-20 sm:pr-16 sm:pt-12 sm:pb-28 flex-wrap scroll-mt-52"
      id="whychooseus"
    >
      <h2 className="text-center text-2xl px-10 font-bold text-secondary leading-9 sm:text-[44px] pb-8 sm:pb-20">
        {data.s2.title}
      </h2>
      <div className="sm:block lg:flex">
        <div className="mr-12 flex-[0.4] hidden lg:block">
          <div className="sm:w-[28rem]  xl:w-full xl:h-[36rem] sm:h-[24rem]  relative">
            <Image
              src="/images/s2.png"
              alt="section_2"
              width={470}
              height={576}
            />
          </div>
        </div>
        <div className="flex-col sm:flex-[0.6] sm:grid sm:grid-cols-2 sm:gap-5">
          {data.s2.cards.map((c, i) => (
            <MeasuresCard
              key={i}
              icon={c.icon}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
