import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Anchor } from "../src/atoms/anchor";
import styles from "../styles/subMenu.module.scss";

export function SubMenu({ name, subMenuData, className }) {
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

    console.log({ className });

    return (
        <div>
            <li
                ref={anchorRef}
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                className={`${styles.hoverUnderline} ${
                    className === "activeLinkBlack"
                        ? styles.activeLinkBlack
                        : styles.activeLinkWhite
                }}`}
                key={name}
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
                                                    <p>
                                                        <Anchor
                                                            name={name}
                                                            href={link}
                                                        />
                                                        <span
                                                            className={
                                                                styles.comingSoon
                                                            }
                                                        >
                                                            coming soon
                                                        </span>
                                                    </p>
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
