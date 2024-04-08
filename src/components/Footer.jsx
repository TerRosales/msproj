import React from "react";
import { Footer } from "flowbite-react"

const Foot = () => {
  return (
    <Footer container className="mt-auto">
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright href="#" by="Terrence.dev" year={2024} />
      </div>
    </Footer>
  );
};

export default Foot;
