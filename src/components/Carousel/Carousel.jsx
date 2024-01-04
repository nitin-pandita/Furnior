import React, { useEffect } from "react";
import "./Carousel.css"; // Import your styles
import $ from "jquery"; // Import jQuery

const Carousel = () => {
  useEffect(() => {
    $(".carousel-item").eq(0).addClass("active");
    var total = $(".carousel-item").length;
    var current = 0;

    $("#moveRight").on("click", function () {
      var next = current;
      current = current + 1;
      setSlide(next, current);
    });

    $("#moveLeft").on("click", function () {
      var prev = current;
      current = current - 1;
      setSlide(prev, current);
    });

    function setSlide(prev, next) {
      var slide = current;
      if (next > total - 1) {
        slide = 0;
        current = 0;
      }
      if (next < 0) {
        slide = total - 1;
        current = total - 1;
      }

      $(".carousel-item").eq(prev).removeClass("active");
      $(".carousel-item").eq(slide).addClass("active");

      console.log("current " + current);
      console.log("prev " + prev);
    }
  }, []);
  return (
    <div className=" carousel shadow-xl">
      <div className="carousel__nav">
        <span id="moveLeft" className="carousel__arrow">
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
          </svg>
        </span>
        <span id="moveRight" className="carousel__arrow">
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </span>
      </div>
      <div className="carousel-item carousel-item--1">
        <div className="carousel-item__image"></div>
        <div className="carousel-item__info">
          <div className="carousel-item__container ">
            <h2 className="carousel-item__subtitle ">The grand moment </h2>
            <h1 className="carousel-item__title text-sm">Le tour</h1>
            <p className="carousel-item__description ">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <a href="#" className="carousel-item__btn">
              Explore the tour
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item carousel-item--2">
        <div className="carousel-item__image"></div>
        <div className="carousel-item__info">
          <div className="carousel-item__container">
            <h2 className="carousel-item__subtitle text-sm">The big window </h2>
            <h1 className="carousel-item__title">Interior Matcher</h1>
            <p className="carousel-item__description">
              Clear Glass Window With Brown and White Wooden
            </p>
            <a href="#" className="carousel-item__btn">
              Read the article
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item carousel-item--3">
        <div className="carousel-item__image"></div>
        <div className="carousel-item__info">
          <div className="carousel-item__container">
            <h2 className="carousel-item__subtitle">Couple Spot </h2>
            <h1 className="carousel-item__title">2 Pair</h1>
            <p className="carousel-item__description">
              Sed ut perspiciatis unde omnis iste natus error 
            </p>
            <a href="#" className="carousel-item__btn">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="carousel-item carousel-item--4">
        <div className="carousel-item__image"></div>
        <div className="carousel-item__info">
          <div className="carousel-item__container">
            <h2 className="carousel-item__subtitle">The Office set </h2>
            <h1 className="carousel-item__title">Office Set of 4 </h1>
            <p className="carousel-item__description">
              Sed ut
            </p>
            <a href="#" className="carousel-item__btn">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="carousel-item carousel-item--5">
        <div className="carousel-item__image"></div>
        <div className="carousel-item__info">
          <div className="carousel-item__container">
            <h2 className="carousel-item__subtitle">The white building </h2>
            <h1 className="carousel-item__title">White tour</h1>
            <p className="carousel-item__description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <a href="#" className="carousel-item__btn">
              Read the article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
