import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import CloseIcon from "@material-ui/icons/Close";

export function Navbar() {
    const navbarLinks = [
        { name: "aaa", link: "#" },
        { name: "bbb", link: "#" },
        { name: "ccc", link: "#" },
    ];

    const [isScrolled, setScrolled] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);

    useEffect(() => {
        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled > 300) {
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
                isScrolled
                    ? `${styles.navbar} ${styles.changeBackgroundColor}`
                    : `${styles.navbar}`
            }
        >
            <div>Lorem, ipsum.</div>

            <MenuTwoToneIcon fontSize="large" onClick={handleHamburgerMenu} />
            <ul
                className={
                    isMenuClicked ? `${styles.mobileMenu}` : `${styles.hide}`
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
