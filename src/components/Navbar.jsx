import { RiCustomerService2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Shop, About, Contact } from "../pages";

const Navbar = () => {
  return (
    <Router>
      <nav className="flex justify-between items-center p-3 min-h-30 ">
        <h2 className="font-bold text-primaryColor text-3xl">
          <Link to="/">Furniro</Link>
        </h2>

        <ul className="hidden sm:flex justify-between min-w-[30%] gap-2">
          <li>
            <Link to="/home" className="hover:text-primaryColor">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-primaryColor">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primaryColor">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primaryColor">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="hidden sm:flex justify-between gap-2 min-w-[10%]">
          <RiCustomerService2Line
            size={"23px"}
            className="hover:text-primaryColor hover:cursor-pointer"
          />
          <IoSearch
            size={"23px"}
            className="hover:text-blue-500 hover:cursor-pointer"
          />
          <FaRegHeart
            size={"23px"}
            className="hover:text-red-600 hover:cursor-pointer"
          />
          <FaShoppingCart
            size={"23px"}
            className="hover:text-primaryColor hover:cursor-pointer"
          />
        </ul>

        <div className="sm:hidden ">
          <button className="small-btn sm:btn">Login</button>
          <button className="bg-white text-primaryColor px-3 py-1 rounded-sm">
            Register
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
