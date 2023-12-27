import { RiCustomerService2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 min-h-30">
      <h2 className="font-bold text-primaryColor text-3xl">Furniro</h2>
      <ul className="hidden sm:flex justify-between min-w-[30%]">
        <li className="list-style">Home</li>
        <li className="list-style">Shop</li>
        <li className="list-style">About</li>
        <li className="list-style">Contact</li>
      </ul>
      <ul className="hidden sm:flex justify-between min-w-[10%]">
        <RiCustomerService2Line size={"23px"} className="hover:text-primaryColor hover:cursor-pointer" />
        <IoSearch size={"23px"} className="hover:text-blue-500 hover:cursor-pointer"  />
        <FaRegHeart size={"23px"} className="hover:text-red-600 hover:cursor-pointer"  />
        <FaShoppingCart size={"23px"} className="hover:text-primaryColor hover:cursor-pointer"  />
      </ul>
      <div className="sm:hidden ">
        <button className="bg-primaryColor text-white px-3 py-1 rounded-lg ">
          Login
        </button>
        <button className="bg-white text-primaryColor px-3 py-1 rounded-sm">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
