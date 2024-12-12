import { Home } from "lucide-react";
import { BiLogOut } from "react-icons/bi";
import { FaBell, FaBoxes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router";

function Header(){
    return(
  <header className="bg-base text-white  h-full w-screen sticky z-50 top-0">
  <nav className=" mx-auto flex items-center flex-wrap justify-between px-32 py-2 font-sans">
    <Link to="/dashboard">
      <button className="bg-letras p-3 rounded-full">
        <Home className="h-6 w-6 text-base" />
      </button>
    </Link>
    <Link to="/campanas">
      <button className="text-2xl  w-40 flex justify-center hover:text-letras">
        <FaBell className="mr-2 mt-1" />
        Campanas
      </button>
      </Link>
    <Link to="/productos">
      <button className="text-2xl  w-40 flex justify-center hover:text-letras">
        <FaBoxes className="mr-2 mt-1" />
        Productos
      </button>
    </Link>
    <Link to="/ventas">
      <button className="text-2xl  w-40 flex justify-center hover:text-letras">
        <GiMoneyStack className="mr-2 mt-1" />
        Ventas
      </button>
    </Link>
    <Link to="/">
      <button className="text-2xl w-40 flex justify-center hover:text-letras">
        <BiLogOut className="mr-2 mt-1" />
        Salir
      </button>
    </Link>
  </nav>
</header>
    )
}

export default Header;