import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <h1 className="mt-4">TestApp - Forms&nbsp;</h1>
      <span className="bg-gradient-to-b from-blue-100 to-blue-400 p-1">
        <span className="flex rounded text-sm bg-yellow-100 text-red-700 hover:bg-red-300 hover:text-black">
          Current Location
        </span>
        Loc#1
      </span>
    </div>
  );
};

export default Header;
