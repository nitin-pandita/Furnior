import { Footer, Navbar } from "./components";
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
} from ".";
const App = () => {
  return (
    <div>
      <Navbar />
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
      <div className=" pt-6 ">
        <h1 className="heading1">Browser the Range</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* creating the card section */}
        <div className="flex justify-center sm:justify-around flex-wrap pt-5 w-[100%] items-center">
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
        <div className="flex flex-col justify-center items-center">
          {/* Our Products */}
          <h1 className="heading1">Our Products</h1>
          <span className="semi-line"></span>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="flex justify-around flex-wrap pt-5">
            <div className="product-card">
              <img src={Image1} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image4} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image5} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image6} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image7} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image8} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image9} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image9} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
            <div className="product-card">
              <img src={Image9} alt="" className="product-card-img" />
              <div className="card-description">
                <p className="text-2xl">Living Room</p>
                <p className="font-light">Stylish Cafe Chair</p>
                <p className="text-2xl">$50</p>
              </div>
            </div>
          </div>
          <button className="bg-transparent btn-transition border border-primaryColor px-12 py-5 hover:bg-primaryColor hover:text-white">
            Show More
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
