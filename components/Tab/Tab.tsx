import React, { useState } from "react";

interface TabProps {
  data: any;
  children: any;
}

const Tab: React.FC<TabProps> = ({ data, children }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = (index: number) => {
    setSelected(index);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex bg-[#1C2448] mb-8 py-3 sm:mb-12 rounded-lg text-white px-4 sm:px-7">
          {data?.map((d: any, i: number) => {
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-between mr-7 first:pl-1 last:-mr-0.5 last:pr-0 sm:mr-11 sm:last:mr-1.5 cursor-pointer hover:translate-y-[-6px] ease-in-out duration-200 relative group ${
                  i === selected ? "translate-y-[-6px]" : ""
                }`}
                onClick={() => handleChange(i)}
              >
                <img
                  src={d.icon}
                  alt="tab_icon"
                  className="text-white z-30 h-5 w-5"
                  // loading="lazy"
                />
                <p className="text-[11px] sm:text-xs z-30 text-center pt-2">
                  {d.title}
                </p>
                <div
                  className={`absolute w-24 h-24 sm:w-36 sm:h-[5.5rem] bg-gradient-to-t from-[#1460A3] to-[#228BEA] rounded-t-lg group-hover:block ${
                    i === selected
                      ? "block -bottom-[18px]"
                      : "hidden z-20 group-hover:-bottom-[18px]"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div>{children[selected]}</div>
    </>
  );
};

export default Tab;
