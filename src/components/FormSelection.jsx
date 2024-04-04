import React from "react";
import "./componentStyles/FormSelection.css";
const FormSelection = () => {
  return (
    <div>
      <ul className="grid grid-rows-4 grid-flow-col w-15 justify-center m-5">
        <li className="formSelectionList">Wash</li>
        <li className="formSelectionList">Gears</li>
        <li className="formSelectionList">Basement</li>
        <li className="formSelectionList">191</li>
        <li className="formSelectionList">200</li>
        <li className="formSelectionList">110</li>
        <li className="formSelectionList">600</li>
        <li className="formSelectionList">200</li>
      </ul>
    </div>
  );
};

export default FormSelection;
