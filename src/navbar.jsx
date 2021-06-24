import { useState, useEffect, useRef } from "react";
import styles from "../styles/navbar.module.scss";
import { Anchor } from "../src/atoms/anchor";
import { navbarData } from "../data";
import { useRouter } from "next/router";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import {
    UilTimes,
    UilAngleDown,
    UilBars,
    UilAngleUp,
} from "@iconscout/react-unicons";

function AnchorComingSoon({ name, href }) {
    return (
        <p>
            <Anchor name={name} href={href} />
            <span className={styles.comingSoon}>coming soon</span>
        </p>
    );
}

function MobileSubMenu({ name, subMenuData, handleClose }) {
    const [open, setOpen] = useState(false);

    function handleOnClick() {
        const subMenuEL = document.querySelector("#mobile-sub-menu");
        subMenuEL.style.display = open ? "none" : "flex";
        setOpen(open ? false : true);
    }

    return (
        <div className={`${styles.hideOnDesktop}`}>
            <li onClick={handleOnClick}>
                {name}{" "}
                {!open ? <UilAngleDown size="30" /> : <UilAngleUp size="30" />}
            </li>
            <ul
                id="mobile-sub-menu"
                className={`${styles.mobileSubMenu} ${styles.slideBottom}`}
            >
                {subMenuData.map(({ name, link, comingSoon }) => {
                    return !comingSoon ? (
                        <li onClick={handleClose} key={name}>
                            <Anchor name={name} href={link} />
                        </li>
                    ) : (
                        <li onClick={handleClose} key={name}>
                            <AnchorComingSoon name={name} href={link} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function DesktopSubMenu({ name, subMenuData }) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={styles.hideOnMobile}>
            <li
                ref={anchorRef}
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                key={name}
                className={styles.hoverUnderline}
            >
                {name}
            </li>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom"
                                    ? "center top"
                                    : "center bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                    className={styles.menuList}
                                >
                                    {subMenuData.map(
                                        ({ name, link, comingSoon }) =>
                                            !comingSoon ? (
                                                <MenuItem onClick={handleClose}>
                                                    <Anchor
                                                        name={name}
                                                        href={link}
                                                    />
                                                </MenuItem>
                                            ) : (
                                                <MenuItem onClick={handleClose}>
                                                    <AnchorComingSoon
                                                        name={name}
                                                        href={link}
                                                    />
                                                </MenuItem>
                                            )
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export function SubMenu({
    name,
    subMenuData,
    handleClose,
    isMenuClicked,
    viewportWidth,
}) {
    return (
        <>
            <DesktopSubMenu name={name} subMenuData={subMenuData} />
            <MobileSubMenu
                name={name}
                subMenuData={subMenuData}
                handleClose={handleClose}
                viewportWidth={viewportWidth}
                isMenuClicked={isMenuClicked}
            />
        </>
    );
}

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
    const handleClose = () => {
        console.log("clicked close buttons");
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
            <UilBars
                onClick={handleHamburgerMenu}
                className={styles.hamburgerMenu}
                size="30"
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
                <UilTimes
                    size="30"
                    className={styles.close}
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
                >
                    <Anchor name={careers.name} href={careers.link} />
                </li>

                {/* Our Offerings */}
                <SubMenu
                    name={services.name}
                    subMenuData={services.subMenuData}
                    serviceLinks={services.servicesLinks}
                    handleClose={handleClose}
                    isMenuClicked={isMenuClicked}
                    viewportWidth={viewportWidth}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
                >
                    <Anchor name={contact.name} href={contact.link} />
                </li>
            </ul>
        </nav>
    );
}
