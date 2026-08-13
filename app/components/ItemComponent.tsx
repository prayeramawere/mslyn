import React from "react";

type ItemProps = {
  itemNumber: string;
  imageUrl: string;
};

const ItemComponent = ({ itemNumber, imageUrl }: ItemProps) => {
  return (
    <>
      <style type="text-css">body:{}</style>
      <div className="w-[90%] mt-3 flex flex-wrap md:flex-nowrap">
        <div className="md:w-[30%] w-full flex justify-center items-center pb-3">
          <div className="md:w-[150px] md:h-[150px] md:rounded-full md:border border-pink-600/25 text-pink-600 flex justify-center items-center text-3xl font-mono font-bold">
            {itemNumber}
          </div>
        </div>
        <div
          className={` bg-cover  bg-center $ md:w-[70%] w-full h-[300px] bg-black rounded-md shadow-sm shadow-pink-600/50 `}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </>
  );
};

export default ItemComponent;
