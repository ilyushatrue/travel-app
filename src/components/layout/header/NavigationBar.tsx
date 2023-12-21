import "./navigationBar.scss";
import { useState, useRef, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { INavMenu, INavMenuItem } from "./IMenuItem";

const navMenuItems = (refs: any[][]): INavMenu => ({
    groups: [
        { 
            items: [
                {
                    ref: refs[0][0],
                    href: "overview",
                    className: "logo",
                    active: false,
                    child: <img src={logo} alt="" />,
                },
            ],
        },
        {
            items: [
                {
                    ref: refs[0][0],
                    href: "overview",
                    child: "Маршруты",
                    className: "menuItem",
                    active: true,
                },
                {
                    ref: refs[0][1],
                    href: "upcomingTours",
                    child: "Экскурсии",
                    className: "menuItem",
                    active: false,
                },
                {
                    ref: refs[0][2],
                    href: "feedbacks",
                    child: "Отзывы",
                    className: "menuItem",
                    active: false,
                },
                {
                    ref: refs[0][3],
                    href: "whyChooseUs",
                    child: "О нас",
                    className: "menuItem",
                    active: false,
                },
                {
                    ref: refs[0][4],
                    href: "contacts",
                    child: "Контакты",
                    className: "menuItem",
                    active: false,
                },
            ],
        },
        {
            items: [
                {
                    liClass: "registration-box",
                    ref: refs[0][0],
                    href: "register",
                    child: "Регистрация",
                    className: "menuItem registration",
                    active: false,
                },
                {
                    ref: refs[0][1],
                    href: "login",
                    child: "Войти",
                    className: "menuItem login",
                    active: false,
                },
                {
                    ref: refs[0][2],
                    href: "account",
                    child: <div className="account"></div>,
                    className: "menuItem",
                    active: false,
                },
            ],
        },
    ],
});

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
    const registration = useRef<any>(null);
    const login = useRef<any>(null);
    const account = useRef<any>(null);
    const [navMenu, setNavMenu] = useState(
        navMenuItems([
            [overview, upcomingTours, feedbacks, whyChooseUs, contacts],
            [registration, login, account],
        ])
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
        if (menuOpen) setMenuOpen(false);
    };

    useEffect(() => {
        setNavMenu((prev) => ({
            groups: [...prev.groups].map((group) => ({
                items: [...group.items].map((item) => {
                    if (item.href === activeMenuItem) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                    return item;
                }),
            })),
        }));
    }, [activeMenuItem]);

    return (
        <div className={["navbar_container", menuOpen ? "open" : ""].join(" ")}>
            <nav>
                {navMenu.groups.map((group, groupIndex) => (
                    <ul
                        key={groupIndex}
                        className={[
                            group.className ?? "",
                            menuOpen ? "open" : "",
                        ].filter(x => x).join(" ")}
                    >
                        {group.items.map((item, itemIndex) => (
                            <li key={itemIndex * (groupIndex + 1)} className={item.liClass}>
                                <Link
                                    ref={item.ref}
                                    to={"/" + item.href}
                                    key={itemIndex * (groupIndex + 1)}
                                    onClick={() => onClick(item.href)}
                                    className={[
                                        item.className,
                                        item.active === true ? "active" : "",
                                    ].filter(x => x).join(" ")}
                                >
                                    {item.child}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </nav>
            <Menu className="menu" onClick={toggleOpenMenu} />
        </div>
    );
}
export default NavigationBar;
