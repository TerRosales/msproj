import React, { useState } from "react";
import { Button, Avatar, Dropdown, Navbar } from 'flowbite-react'

const Header = () => {

  return (
    <Navbar fluid rounded className="bg-gradient-to-bl from-blue-300 to-cyan-100 mb-10">
      <Navbar.Brand href="/">
        <img src="/navImg.jpg" className="mr-3 h-6 sm:h-9" alt="icon" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TestApp</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex flex-col hover:bg-blue-200  mx-2">
              <h4>Current Location</h4> <span className="text-[14px] rounded bg-green-100">10102020</span>
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Alerts</Dropdown.Item>
          <Dropdown.Item>Training</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Recent Alerts</Navbar.Link>
        <Navbar.Link href="#">Qualifications</Navbar.Link>
        <Navbar.Link href="#">Training Manual</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
