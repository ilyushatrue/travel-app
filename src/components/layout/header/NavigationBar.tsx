import "./navigationBar.scss";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from '../../../images/logo.png'

const menuItems = [
  { address: "/routes", name: "Маршруты" },
  { address: "/about", name: "Обо мне" },
  { address: "/prices", name: "Цены" },
  { address: "/contacts", name: "Контакты" },
  { address: "/login", name: "Войти" },
];
function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar_container">
      <nav>
        <NavLink to="/home" className={"title"}>
          <img src={logo} alt="LOGO"/>
        </NavLink>
        <ul className={menuOpen ? "open" : ""}>
          {menuItems.map((x) => (
            <li>
              <NavLink onClick={onClick} to={x.address}>{x.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Menu className="menu" onClick={onClick} />
    </div>
  );
}
export default NavigationBar;
