import logo from "../../img/logo.jpg";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to = "/" className="brand">
            <img src={logo} width={100} alt="" />
        </Link>

        
        <ul className="nav-links">
            <Link to="/category/remeras">
              <p>Remeras</p>
            </Link>
            <Link to= "/category/buzos">
              <p>Buzos</p>
            </Link>
            <Link to= "/category/accesorios">
              <p>Accesorios</p>
              </Link>
        </ul>
    <CartWidget />

    </nav>
  )
}

export default NavBar