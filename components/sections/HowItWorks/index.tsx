import Link from "next/link";
import React from "react";

import { pageContent as data } from "../../../data/data";
import SolutionsCard from "../../SolutionsCard";

const HowItWorks = () => {
  return (
    <section
      className="px-5 sm:px-14 pb-11 sm:pb-8 bg-cover bg-center scroll-mt-48"
      id="howitworks"
      style={{
        backgroundImage: `url(${data.s3.image})`,
      }}
    >
      <h2 className="text-2xl sm:text-[44px] pt-7 pb-9 sm:py-16 font-semibold sm:w-[750px] text-white leading-9 sm:leading-[72px]">
        {data.s3.title}
      </h2>
      <h3 className="sm:text-2xl mb-4 sm:mb-6 text-[#01B695] font-bold">
        <Link href="#" passHref>
          <a target="_blank" rel="noopener noreferrer" className="no-underline">
            Learn more about us &gt;
          </a>
        </Link>
      </h3>
      <div className="sm:mr-0 sm:flex grid grid-cols-2 gap-5 sm:w-full justify-between sm:flex-wrap lg:flex-nowrap">
        {data.s3.cards.map((c, i) => (
          <SolutionsCard
            icon={c.icon}
            title={c.title}
            description={c.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
