import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between w-full p-3 items-center flex-wrap">
      <span className="line"></span>
        <div className="heading">
          <h1 className="font-bold text-primaryColor text-2xl">Furnio</h1>
          <p>Haryana, Gurgaon, India</p>
          <p>12, Street Place</p>
        </div>
        <div className="links flex flex-col justify-between px-3">
          <h1 className="font-bold">Links</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy</p>
        </div>
        <div className="flex flex-col justify-between px-3">
          <h1 className="font-bold">Help</h1>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>
        <div className="flex flex-col justify-evenly">
          <h1 className="font-semibold">Newsletter</h1>
          <div className="">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 border outline-none"
            />
            <button className="px-3 py-2 border bg-primaryColor text-white rounded-l outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
