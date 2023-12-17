import "./navigationBar.scss";
import { useState, useRef, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { IMenuItem } from "./IMenuItem";

const navMenuItems = [
  {
    address: "/register",
    title: "Регистрация",
    className: "menuItem registration",
  },
  { address: "/login", title: "Войти", className: "menuItem login" },
  { address: "/account", title: "Личный кабинет", className: "menuItem" },
];
const menuItems = (refs: any[]): IMenuItem[] => [
  {
    ref: refs[0],
    href: "overview",
    title: "Маршруты",
    className: "menuItem",
    active: false,
  },
  {
    ref: refs[1],
    href: "upcomingTours",
    title: "Экскурсии",
    className: "menuItem",
    active: false,
  },
  {
    ref: refs[2],
    href: "feedbacks",
    title: "Отзывы",
    className: "menuItem",
    active: false,
  },
  {
    ref: refs[3],
    href: "whyChooseUs",
    title: "О нас",
    className: "menuItem",
    active: false,
  },
  {
    ref: refs[4],
    href: "contacts",
    title: "Контакты",
    className: "menuItem",
    active: false,
  },
];
interface IProps {
  assignActiveMenuItem: Function;
  activeMenuItem: any;
  assignEnableScroll: Function;
}
function NavigationBar({
  assignActiveMenuItem,
  activeMenuItem,
  assignEnableScroll,
}: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overview = useRef<any>(null);
  const upcomingTours = useRef<any>(null);
  const feedbacks = useRef<any>(null);
  const whyChooseUs = useRef<any>(null);
  const contacts = useRef<any>(null);
  const [menu, setMenu] = useState(
    menuItems([overview, upcomingTours, feedbacks, whyChooseUs, contacts])
  );

  const toggleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = !menuOpen
      ? ""
      : "hidden";
  }, [menuOpen]);

  const onClick = (href: any) => {
    assignActiveMenuItem(href);
    assignEnableScroll(true);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    setMenu((prev) =>
      [...prev].map((item) => {
        if (item.href === activeMenuItem) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      })
    );
  }, [activeMenuItem]);

  return (
    <div className={menuOpen ? "open" : ""}>
      <div className="navbar_container">
        <nav>
          <Link
            to={"/" + menu[0].href}
            className={"logo"}
            onClick={() => onClick(menu[0].href)}
          >
            <div></div>
          </Link>
          <nav>
            <ul className={menuOpen ? "open" : ""}>
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    ref={item.ref}
                    to={"/" + item.href}
                    key={index}
                    onClick={() => onClick(item.href)}
                    className={
                      item.className +
                      " " +
                      (item.active === true ? "active" : "")
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <ul className="authorization">
              {navMenuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    key={index}
                    onClick={onClick}
                    to={item.address}
                    className={item.className}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
        <Menu className="menu" onClick={toggleOpenMenu} />
      </div>
    </div>
  );
}
export default NavigationBar;
