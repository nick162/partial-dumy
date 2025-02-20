import React from "react";
import { FC } from "react";

interface CardExpertisePorps {
  title: string;
  description: string;
  icon: any;
}

const CardExpertise: FC<CardExpertisePorps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="space-y-4 rounded-md bg-[#9ad1e8] p-6 dark:bg-secondary">
      <div className="flex w-fit items-center justify-center rounded-lg bg-white p-2 dark:text-black">
        <Icon />
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardExpertise;
