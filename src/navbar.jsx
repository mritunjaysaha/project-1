import { useState, useEffect, createRef } from "react";
import styles from "../styles/navbar.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { OnHoverMenu } from "../src/menu";
import { Anchor } from "../src/atoms/anchor";
import { navbarData } from "../data";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import { useRouter } from "next/router";

export function Navbar() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [viewportWidth, setViewportWidth] = useState();
    const router = useRouter();

    useEffect(() => {
        setViewportWidth(document.documentElement.clientWidth);

        const listener = document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled > 200) {
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
        services,
        careers,
        newsLetter,
        contact,
    } = navbarData;

    return (
        <nav
            className={
                isScrolled
                    ? `${styles.navbarHeaderAbsolute} ${styles.changeBackgroundColor} ${styles.slideInBottom}`
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
                            ? `${styles.navbarMenu} ${styles.slideInRight}`
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

                <li
                    key={home.name}
                    className={
                        router.pathname === home.link
                            ? isScrolled
                                ? styles.activeLinkBlack
                                : styles.activeLinkWhite
                            : ""
                    }
                    onClick={handleCloseButton}
                >
                    <Anchor name={home.name} href={home.link} />
                </li>
                <li
                    key={careers.name}
                    className={
                        router.pathname === careers.link
                            ? isScrolled
                                ? styles.activeLinkBlack
                                : styles.activeLinkWhite
                            : ""
                    }
                    onClick={handleCloseButton}
                >
                    <Anchor name={careers.name} href={careers.link} />
                </li>
                <OnHoverMenu
                    data={services}
                    isMenuClicked={isMenuClicked}
                    setMenuClicked={setMenuClicked}
                    handle={handleCloseButton}
                />

                <li
                    key={newsLetter.name}
                    className={
                        router.pathname === newsLetter.link
                            ? isScrolled
                                ? styles.activeLinkBlack
                                : styles.activeLinkWhite
                            : ""
                    }
                    onClick={handleCloseButton}
                >
                    <Anchor name={newsLetter.name} href={newsLetter.link} />
                </li>
                <li
                    key={contact.name}
                    className={
                        router.pathname === contact.link
                            ? isScrolled
                                ? styles.activeLinkBlack
                                : styles.activeLinkWhite
                            : ""
                    }
                    onClick={handleCloseButton}
                >
                    <Anchor name={contact.name} href={contact.link} />
                </li>
            </ul>
        </nav>
    );
}
