import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { navbarList, companyName } from "../data";
import { OnHoverMenu } from "../src/menu";

export function Navbar({ className }) {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [viewportWidth, setViewportWidth] = useState();

    useEffect(() => {
        setViewportWidth(document.documentElement.clientWidth);

        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (
                (viewportWidth < 996 && scrolled >= viewportWidth) ||
                scrolled > 1200
            ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        return () => {
            document.removeEventListener("scroll", listener);
        };
    });

    const handleHamburgerMenu = () => {
        setMenuClicked(true);
    };
    const handleCloseButton = () => {
        setMenuClicked(false);
    };

    return (
        <nav
            className={
                className
                    ? className.toLowerCase() == "navbar"
                        ? isScrolled
                            ? `${styles.navbarHeaderAbsolute} ${styles.changeBackgroundColor} ${styles.navbar} ${styles.showNavbar}`
                            : `${styles.hideNavbar}`
                        : ``
                    : `${styles.navbarHeaderAbsolute}`
            }
        >
            <h1 className={styles.companyName}>{companyName.name}</h1>

            <MenuTwoToneIcon
                fontSize="large"
                onClick={handleHamburgerMenu}
                className={styles.hamburgerMenu}
            />
            <ul
                className={
                    viewportWidth < 996
                        ? isMenuClicked
                            ? `${styles.navbarMenu}`
                            : `${styles.hideMenu}`
                        : `${styles.showMenu} ${styles.navbarMenu}`
                }
            >
                <CloseIcon
                    color="inherit"
                    className={styles.close}
                    fontSize="inherit"
                    onClick={handleCloseButton}
                />
                {/* {navbarList.map((link) => (
                    <li key={link.name}>{link.name}</li>
                ))} */}

                <li key="home">home</li>
                <li key="solutions">solutions</li>
                <OnHoverMenu />
                <li key="blog">blog</li>
            </ul>
        </nav>
    );
}
