import React, { useState } from "react";
import { Button } from 'flowbite-react'

const Header = () => {

  return (
    <div className="flex justify-center">
      <h1 className="mt-4">TestApp - Forms&nbsp;</h1>
      <div className="rounded bg-gradient-to-b from-blue-100 to-blue-200 p-1">
        <Button color="blue"
        outline>
          Current Location
        </Button>
        Loc#1
      </div>
    </div>
  );
};

export default Header;
