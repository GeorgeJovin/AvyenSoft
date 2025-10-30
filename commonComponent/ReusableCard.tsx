import React from "react";
import { Button, Card } from "antd";

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
    <Card className="w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col gap-6 h-full">
        {/* ✅ Fixed-height image container */}
        <div
          className="w-full flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden"
          style={{ height: "300px" }}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 m-0">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed m-0">
          {description}
        </p>

        {/* Horizontal Line */}
        <div className="border-t border-gray-200"></div>

        {/* Button */}
        <Button
          type="primary"
          size="large"
          onClick={onButtonClick}
          className="w-full h-12 text-base font-semibold bg-blue-500 hover:bg-blue-600 border-none rounded-lg"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default CardContainer;
