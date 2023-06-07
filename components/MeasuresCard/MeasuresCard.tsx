import React from "react";

interface MeasuresCardProps {
  icon: string;
  title: string;
  description: string;
}

const MeasuresCard: React.FC<MeasuresCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex pb-9 sm:pb-0 sm:mr-2">
      <img
        src={icon}
        alt="measure_icon"
        className="self-baseline mr-2 w-28 sm:w-12 mt-1"
        // loading="lazy"
      />
      <div className="flex-col items-center mb-1">
        <p className="text-md sm:text-xl font-bold text-blue mb-3">{title}</p>
        <p className="text-xs sm:text-sm font-gray-500 leading-5 text-[#66686F] sm:font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MeasuresCard;
