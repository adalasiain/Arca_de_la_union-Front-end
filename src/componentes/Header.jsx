import '../styles.css';
import img1 from '../assets/image.png';
import { FaHome, FaBoxes, FaDollarSign } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { Bell, Home } from 'lucide-react';
import { Link } from "react-router-dom";

const Header=()=>{
return(
    <header className="bg-base text-white relative h-16 w-full">
    <nav className="container mx-auto flex items-center justify-between px-32 py-2">
      <Link to="/dashboard">
        <button className="bg-letras p-3 rounded-full">
          <Home className="h-6 w-6 text-base" />
        </button>
      </Link>
      <Link to="/campanas">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letrasl">
          <Bell className="mr-2 mt-1" />
          Campanas
        </button>
      </Link>
      <Link to="/productosCampanas">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <FaBoxes className="mr-2 mt-1" />
          Productos
        </button>
      </Link>
      <Link to="/ventas">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <GiMoneyStack className="mr-2 mt-1" />
          Ventas
        </button>
      </Link>
      <Link to="/">
        <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
          <BiLogOut className="mr-2 mt-1" />
          Salir
        </button>
      </Link>
    </nav>
  </header>
)
}

export default Header;