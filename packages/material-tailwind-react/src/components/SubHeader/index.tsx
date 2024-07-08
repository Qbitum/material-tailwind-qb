
import React from "react";
import Typography from "../Typography";
import Button from "../Button";

export type SubHeaderProps = {
  buttonText: string;
  onButtonClick: () => void;
  buttonShow: boolean;
  leftCorner: "home" | "back" | "none";
};

export function SubHeader({
  buttonText,
  onButtonClick,
  buttonShow,
  leftCorner,
}: SubHeaderProps) {

  
  let leftContent = null;

  if (leftCorner === "home") {
    leftContent = (
      <div className="flex items-center gap-1">
        <Typography variant="h6" className="text-gray-800 mr-2">
        {/* <FaHome className="text-black" /> */}
          Home
        </Typography>
      </div>
    );
  } else if (leftCorner === "back") {
    leftContent = (
      <div className="flex items-center text-2xl" >
               {/* <FaArrowLeft className="flex text-black" /> */}

        <Button
          variant="text"
          className="text-xl"
        > 
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b-2">
      <div className="flex items-center gap-2">
        {leftContent}
        {leftContent && <div className="h-full w-px bg-gray-500 mx-2"></div>}
        <Typography variant="h6" className="text-gray-800 text-3xl font-bold font-['Roboto']" >hi
          {/* {pathName ? pathName.charAt(0).toUpperCase() + pathName.slice(1) : 'Home'} */}
        </Typography>
      </div>
      {buttonShow && (
        <div className="ml-auto">
          <Button onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}
