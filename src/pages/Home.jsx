import React from "react";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
} from "..";
import "../index.css";

import furnitureData from "../data/furniture-data";
import Carousel from "../components/Carousel/Carousel";
import CardItem from "../components/Card/CardItem";
import { Button } from "@mui/material";
import ButtonCustom from "../components/Button";
const Home = () => {
  const Images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];
  return (
    <div>
      <header className="overflow-x-hidden">
        <div className="h-screen intro ">
          <div className=" bg-secondaryColor p-10 sm:floater-right">
            <p className="spacing">New arrival</p>
            <h1 className="text-[50px] font-semibold text-primaryColor my-4">
              Discover Our <br /> New Collection
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus quasi nam velit.
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </header>
      <div className=" mt-[8vh] ">
        <h1 className="heading1">Browser the Range</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* creating the card section */}
        <div className="flex justify-center sm:justify-around flex-wrap pt-5 w-[100%] items-center mb-5">
          <div className="card sm:card-small">
            <img src={Image1} className="card-image" alt="" />
            <p className="text-2xl">Living Room</p>
          </div>
          <div className="card">
            <img src={Image2} className="card-image" alt="" />
            <p className="text-2xl">Study Table</p>
          </div>
          <div className="card">
            <img src={Image3} className="card-image" alt="" />
            <p className="text-2xl">Tea Table</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[20vh] mb-10">
          {/* Our Products */}
          <h1 className="heading1">Our Products</h1>
          <span className="semi-line"></span>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="w-full">
            <CardItem />
          </div>
          <button className="custom-btn">Show More</button>
        </div>
          <span className="divider"></span>
        <div className="max-container px-[20px] flex flex-col items-center sm:flex-between sm:flex-row ">

          <div className="w-full h- sm:w-[50%] ">
            <h1 className="font-bold text-2xl">
              50+ Beautiful Room <br /> Inspiration
            </h1>
            <p className="my-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis quia in totam eveniet necessitatibus commodi eum. At
              nemo qui, quisquam deserunt tenetur sunt.
            </p>
            <ButtonCustom />
          </div>

          <Carousel images={Images} className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
