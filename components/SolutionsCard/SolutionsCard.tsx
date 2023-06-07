import React from "react";

interface SolutionsCardProps {
  icon: string;
  title: string;
  description: string;
}

const SolutionsCard: React.FC<SolutionsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col p-3 bg-white h-42 sm:p-5 sm:w-48 sm:h-auto 2xl:w-64">
      <img
        src={icon}
        alt={title}
        className="mb-3 w-6 sm:w-8"
        // loading="lazy"
      />
      <p>
        <span className="text-sm sm:text-md font-bold">{title}</span>{" "}
        <span className="text-xs sm:leading-7 sm:text-sm">{description}</span>
      </p>
    </div>
  );
};

export default SolutionsCard;
