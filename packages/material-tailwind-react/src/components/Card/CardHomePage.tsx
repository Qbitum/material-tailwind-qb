import React from "react";

export type CardHomePageProps = {
  itemTag: String;
  color?: String;
  icon?: String;
  onClick?: () => void;
};

export function CardHomePage({
  itemTag,
  color = 'bg-pink-50',
  icon,
  onClick,
  ...props
}: CardHomePageProps) {

  const imageSrc = `icons/${icon}.svg`;

  return (
    <>
      <div className="justify-start items-start h-[182px] gap-5 inline-flex p-4 drop-shadow-md hover:drop-shadow-2xl items-center bg-white" onClick={onClick}>
          <div className={`${color} rounded-lg`}>
            <div className="h-[150px] w-[150px] flex justify-center items-center">
              <img src={imageSrc} alt="brand" className="h-8 w-8 w-[60px] h-[60px]"/>
            </div>
          </div>
          <div className="text-gray-800 text-2xl font-bold font-['Roboto'] col-span-2 leading-9">
              {itemTag}
          </div>
      </div>

    </>
  );
}