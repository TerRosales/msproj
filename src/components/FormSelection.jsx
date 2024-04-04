import React from "react";
import "./componentStyles/FormSelection.css";
const FormSelection = () => {
  return (
    <div>
      <ul className="grid grid-rows-4 grid-flow-col w-15 justify-center m-5">
        <li className="formSelectionList">Loc#1</li>
        <li className="formSelectionList">Loc#2</li>
        <li className="formSelectionList">Loc#3</li>
        <li className="formSelectionList">Loc#4</li>
        <li className="formSelectionList">Loc#5</li>
        <li className="formSelectionList">Loc#6</li>
        <li className="formSelectionList">Loc#7</li>
        <li className="formSelectionList">Loc#8</li>
      </ul>
    </div>
  );
};

export default FormSelection;
