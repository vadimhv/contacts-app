import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div><NavLink to={'/add/'}>Add contact</NavLink></div>
            <div><NavLink to={'/contacts/'}>Contact list</NavLink></div>
        </div>
    )
}

export default Navbar;
