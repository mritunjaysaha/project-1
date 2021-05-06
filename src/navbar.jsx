import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { OnHoverMenu } from "../src/menu";
import { Anchor } from "../src/atoms/anchor";
import { companyName, navbarData } from "../data";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

export function Navbar() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [viewportWidth, setViewportWidth] = useState();

    useEffect(() => {
        setViewportWidth(document.documentElement.clientWidth);

        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled > 600) {
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

    const {
        company,
        home,
        solutions,
        services,
        careers,
        newsLetter,
        contact,
    } = navbarData;

    return (
        <nav
            className={
                isScrolled
                    ? `${styles.navbarHeaderAbsolute} ${styles.changeBackgroundColor}`
                    : `${styles.navbarHeaderAbsolute}`
            }
        >
            <h1>
                <Anchor name={company.name} href={company.link} />
            </h1>

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

                <li key={home.name}>
                    <Anchor name={home.name} href={home.link} />
                </li>
                <li key={solutions.name}>
                    <Anchor name={solutions.name} href={solutions.link} />
                </li>
                <li key={careers.name}>
                    <Anchor name={careers.name} href={careers.link} />
                </li>
                <OnHoverMenu data={services} />

                <li key={newsLetter.name}>
                    <Anchor name={newsLetter.name} href={newsLetter.link} />
                </li>
                <li key={contact.name}>
                    <Anchor name={contact.name} href={contact.link} />
                </li>
            </ul>
        </nav>
    );
}
