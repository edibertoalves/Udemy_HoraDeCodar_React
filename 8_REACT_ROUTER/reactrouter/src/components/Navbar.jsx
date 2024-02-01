// 2 - Links com react router
import { Link, NavLink } from "react-router-dom"

import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">Sobre</Link> */}

        <NavLink to="/"
        //  className={({isActive}) => isActive ? "esta-ativo" : "nao-ativo"}
        >Home</NavLink>
        <NavLink to="/about" 
        // className={({isActive}) => isActive ? "esta-ativo" : "nao-ativo"}
        >Sobre</NavLink>
    </nav>

  )
}

export default Navbar