import React from "react";

type ValueProps = {
  topic: string;
  description: string;
};

const Value = ({ topic, description }: ValueProps) => {
  return (
    <div className="w-[300px] h-[200px] rounded-lg shadow-sm shadow-gray-600/25 px-8 py-5 bg-white">
      <h1 className="font-bold text-sm ">{topic}</h1>
      <p className="text-sm mt-3">{description}</p>
    </div>
  );
};

export default Value;
