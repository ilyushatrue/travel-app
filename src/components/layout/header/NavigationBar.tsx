import "./navigationBar.scss";
import { useState, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { IMenuItem } from "./IMenuItem";

const menuItems: IMenuItem[] = [
  { href: "overview", title: "Маршруты" },
  { href: "upcomingTours", title: "Экскурсии" },
  { href: "feedbacks", title: "Отзывы" },
  { href: "whyChooseUs", title: "О нас" },
  { href: "contacts", title: "Контакты" },
];

const navMenuItems = [
  { address: "/login", title: "Войти" },
  { address: "/register", title: "Регистрация" },
  { address: "/account", title: "Личный кабинет" },
];

interface IProps {
  setActiveTitle: Function;
}
function NavigationBar({ setActiveTitle }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    document.getElementsByTagName("body")[0].style.overflow = menuOpen
      ? ""
      : "hidden";

    onClick();
  };

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={menuOpen ? "open" : ""}>
      <div className="navbar_container">
        <nav>
          <NavLink to="/home" className={"title"}>
            <div className="logo"></div>
          </NavLink>
          <ul className={menuOpen ? "open" : ""}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={"/" + item.href}
                  key={index}
                  onClick={() => setActiveTitle(item.href)}
                  className={"menuItem"}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            {navMenuItems.map((x, index) => (
              <li key={index}>
                <NavLink
                  key={index}
                  onClick={onClick}
                  to={x.address}
                  className={"menuItem"}
                >
                  {x.title}
                </NavLink>
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
