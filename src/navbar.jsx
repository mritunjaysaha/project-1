import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Anchor } from "../src/atoms/anchor";
import { navbarData } from "../data";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import { useRouter } from "next/router";
import { SubMenu } from "../src/subMenu";
import { route } from "next/dist/next-server/server/router";

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

    const { company, home, services, careers, newsLetter, contact } =
        navbarData;

    return (
        <nav
            className={
                isScrolled
                    ? `${styles.navbarHeaderAbsolute} ${styles.changeBackgroundColor} ${styles.slideInTop}`
                    : `${styles.navbarHeaderAbsolute}`
            }
        >
            {/* Company name */}
            <h1>
                <Anchor name={company.name} href={company.link} />
            </h1>

            {/* Mobile menu icon */}
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
                {/* Mobile close icon */}
                <CloseIcon
                    color="inherit"
                    className={styles.close}
                    fontSize="inherit"
                    onClick={handleCloseButton}
                />

                {/* Home */}
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

                {/* Careers */}
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

                {/* Our Offerings */}
                {console.log(router.pathname)}
                <SubMenu
                    name={services.name}
                    subMenuData={services.subMenuData}
                    serviceLinks={services.servicesLinks}
                    className={
                        services.servicesLinks.includes(router.pathname)
                            ? isScrolled
                                ? "activeLinkBlack"
                                : "activeLinkWhite"
                            : ""
                    }
                />

                {/* News letter */}
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

                {/* contacts */}
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
