
import { Link, NavLink } from "react-router-dom";
import header from '../assets/header.png'

const Header = () =>{
    return(
        <div>

            <NavLink to="/">
                <img src={header} alt="Home"/>
            </NavLink>

        </div>
    )
}

export default Header