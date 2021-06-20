import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Anchor } from "../src/atoms/anchor";
import styles from "../styles/subMenu.module.scss";

function AnchorComingSoon({ name, link }) {
    return (
        <p>
            <Anchor name={name} href={link} />
            <span className={styles.comingSoon}>coming soon</span>
        </p>
    );
}

function MobileSubMenu({ name, subMenuData }) {
    const [open, setOpen] = useState(false);

    function handleOnClick() {
        console.log("button clicked");
        const subMenuEL = document.querySelector("#mobile-sub-menu");
        console.log({ subMenuEL });
        subMenuEL.style.display = "flex";
    }

    return (
        <div className={`${styles.hideOnDesktop}`}>
            <li onClick={handleOnClick}>{name}</li>
            <ul id="mobile-sub-menu" className={`${styles.mobileSubMenu}`}>
                {subMenuData.map(({ name, link, comingSoon }) =>
                    !comingSoon ? (
                        <li>
                            <Anchor name={name} link={link} />
                        </li>
                    ) : (
                        <li>
                            <AnchorComingSoon name={name} link={link} />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

function DesktopSubMenu({ name, subMenuData }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

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
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
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
                                                        link={link}
                                                    />
                                                </MenuItem>
                                            ) : (
                                                <MenuItem onClick={handleClose}>
                                                    <AnchorComingSoon
                                                        name={name}
                                                        link={link}
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

export function SubMenu({ name, subMenuData }) {
    return (
        <>
            <DesktopSubMenu name={name} subMenuData={subMenuData} />
            <MobileSubMenu name={name} subMenuData={subMenuData} />
        </>
    );
}
