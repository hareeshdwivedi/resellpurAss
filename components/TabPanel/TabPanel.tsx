import React from "react";

interface TabPanelProps {
  data: any;
}
const TabPanel: React.FC<TabPanelProps> = ({ data }) => {
  return (
    <div className="flex flex-col-reverse lg:flex lg:flex-row">
      <div className="flex-1 sm:flex-0.5">
        <img
          src={data?.image}
          alt="tab_icon"
          className="md:pt-0 pt-4 sm:pt-0 w-full"
        />
      </div>
      <div className="flex-1 sm:flex-0.5 xs:pl-0 md:pl-2 lg:pl-4 xl:pl-32">
        <p className="text-blue font-semibold text-xl sm:text-[28px] mb-4">
          {data.title}
        </p>
        <p className="text-lg sm:text-sm text-justify text-gray-500 sm:w-[470px] lg:w-full leading-6 sm:leading-7 text-[#66686F]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default TabPanel;
