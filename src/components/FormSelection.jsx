import React from "react";
import "./componentStyles/FormSelection.css";
import { Button } from "flowbite-react";
const FormSelection = () => {
  return (
    <div className="flex flex-col w-1/4 mx-auto gap-2">
      <h2>Select your location</h2>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <Button>Loc#1</Button>
        <Button>Loc#1</Button>
        <Button>Loc#1</Button>
        <Button>Loc#1</Button>
        <Button>Loc#1</Button>
        <Button>Loc#1</Button>
      </div>
    </div>
  );
};

export default FormSelection;
