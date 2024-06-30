import React from "react";

const Grid = () => {
  return (
    <div className="flex">
      <div className=" bg-dark-purple hidden md:block md:w-20 lg:w-72">
        <h1 className=" p-7 text-white">Sidebar</h1>
      </div>
      <div className=" bg-slate-500 flex-1">
        <h1 className=" p-7">Home Page</h1>
      </div>
    </div>
  );
};

export default Grid;
