import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div><NavLink activeClassName={style.active}  to={'/add/'} exact  >Add contact</NavLink></div>
            <div><NavLink to={'/contacts/'} exact  activeClassName={style.active}>Contact list</NavLink></div>
        </div>
    )
}

export default Navbar;
