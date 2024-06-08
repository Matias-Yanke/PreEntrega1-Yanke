import logo from "../../img/logo.jpg"
import CartWidget from "./CartWidget"
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="brand">
            <img src={logo} width={100} alt="" />
        </div>

        
        <ul className="nav-links">
            <li>Gorras</li>
            <li>Medias</li>
            <li>Accesorios</li>
        </ul>
    <CartWidget />

    </nav>
  )
}

export default NavBar