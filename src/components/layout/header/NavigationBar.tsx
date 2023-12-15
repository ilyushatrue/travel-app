import "./navigationBar.scss";
import { useState, useRef, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { IMenuItem } from "./IMenuItem";

const navMenuItems = [
  { address: "/login", title: "Войти" },
  { address: "/register", title: "Регистрация" },
  { address: "/account", title: "Личный кабинет" },
];

interface IProps {
  setActiveMenuItem: Function;
  activeMenuItem: any;
  setEnableScroll: (enabled: boolean)=>void;
}
function NavigationBar({ setActiveMenuItem, activeMenuItem, setEnableScroll}: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false)
  const overview = useRef<any>(null);
  const upcomingTours = useRef<any>(null);
  const feedbacks = useRef<any>(null);
  const whyChooseUs = useRef<any>(null);
  const contacts = useRef<any>(null);

  const menuItems: IMenuItem[] = [
    { ref: overview, href: "overview", title: "Маршруты", className: "" },
    {
      ref: upcomingTours,
      href: "upcomingTours",
      title: "Экскурсии",
      className: "",
    },
    { ref: feedbacks, href: "feedbacks", title: "Отзывы", className: "" },
    { ref: whyChooseUs, href: "whyChooseUs", title: "О нас", className: "" },
    { ref: contacts, href: "contacts", title: "Контакты", className: "" },
  ];

  const onMenuClick = () => {
    
    document.getElementsByTagName("body")[0].style.overflow = menuOpen
      ? ""
      : "hidden";
  };

  useEffect(()=>{
    setEnableScroll(true)
  }, [shouldScroll,setEnableScroll])

  const onClick = (href:any) => {
    setActiveMenuItem(href)
    setShouldScroll(true);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    
    menuItems.forEach((item) => {
      if (item.href === activeMenuItem) {
        item.ref.current.className = "menuItem active";
      } else {
        item.ref.current.className = "menuItem";
      }
    });
  }, [activeMenuItem]);

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
                  ref={item.ref}
                  to={"/" + item.href}
                  key={index}
                  onClick={() => onClick(item.href)}
                  className={"menuItem "}
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
