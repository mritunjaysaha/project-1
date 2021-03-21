import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

export function Navbar() {
    const navbarLinks = [
        { name: "aaa", link: "#" },
        { name: "aaa", link: "#" },
        { name: "aaa", link: "#" },
    ];

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled > 300) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });

        return () => {
            document.removeEventListener("scroll", listener);
        };
    });

    return (
        <nav
            className={
                scroll
                    ? `${styles.navbar} ${styles.changeBackgroundColor}`
                    : `${styles.navbar}`
            }
        >
            <div>Lorem, ipsum.</div>

            <MenuTwoToneIcon fontSize="large" />
            {/* {navbarLinks.map((link) => (
                <li>{link.name}</li>
            ))} */}
        </nav>
    );
}
