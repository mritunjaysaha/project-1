import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import CloseIcon from "@material-ui/icons/Close";

export function Navbar() {
    const navbarLinks = [
        { name: "home", link: "#" },
        { name: "bbb", link: "#" },
        { name: "ccc", link: "#" },
        { name: "ccc", link: "#" },
    ];

    const [isScrolled, setScrolled] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [viewportWidth, setViewportWidth] = useState();

    useEffect(() => {
        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        setViewportWidth(document.documentElement.clientWidth);
        console.log({ viewportWidth });

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
                isScrolled
                    ? `${styles.navbar} ${styles.changeBackgroundColor}`
                    : `${styles.navbar}`
            }
        >
            <div>Lorem, ipsum.</div>

            <MenuTwoToneIcon
                fontSize="large"
                onClick={handleHamburgerMenu}
                className={styles.hamburgerMenu}
            />
            <ul
                className={
                    viewportWidth <= 640
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
                {navbarLinks.map((link) => (
                    <li key={link.name}>{link.name}</li>
                ))}
            </ul>
        </nav>
    );
}
