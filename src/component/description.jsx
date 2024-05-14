import React from "react";
export const Description = ({ Name ,description}) => {
  return (
        <div className="flex flex-col text-white w-[300px]">
           <div>
                <h1 className="text-white font-bold">{Name}</h1>
           </div>
           <div>
                <p className="text-white line-clamp-2 ">{description}</p>
           </div>
           
        </div>
  );
};