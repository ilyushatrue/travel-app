import "./navigationBar.scss";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from '../../../images/logo.png'

const menuItems = [
  { address: "/tours", name: "Маршруты" },
  { address: "/about", name: "Обо мне" },
  { address: "/prices", name: "Цены" },
  { address: "/contacts", name: "Контакты" },
  { address: "/login", name: "Войти" },
];
function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () =>{
    document.getElementsByTagName('body')[0].style.overflow = menuOpen ?'' : 'hidden';
    onClick();
  }
  
  const onClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={ menuOpen ? "open" : ""}>
      <div className="navbar_container">
        <nav>
          <NavLink to="/home" className={"title"}>
            <div className="logo"></div>
          </NavLink>
          <ul className={menuOpen ? "open" : ""}>
            {menuItems.map((x) => (
              <li>
                <NavLink onClick={onClick} to={x.address}>{x.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Menu className="menu" onClick={onMenuClick} />
      </div>
    </div>
  );
}
export default NavigationBar;
