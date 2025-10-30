import React from "react";
import { Button } from "antd";
import Image from "next/image";

interface CardContainerProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:w-80 flex flex-col justify-between border border-gray-100">
      {/* Image */}
      <div className="flex justify-start items-center pt-8 pb-4 px-4">
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-semibold text-black mb-2 text-left">
          {title}
        </h2>
        <p className="text-gray-600 text-[14px] leading-relaxed text-left">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <Button
          type="primary"
          size="large"
          className="w-full h-8 text-base font-semibold bg-[#2da8ff] hover:bg-[#1593e0] border-none rounded-md"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardContainer;
