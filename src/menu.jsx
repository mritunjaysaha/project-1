import styles from "../styles/onHoverMenu.module.scss";
import { Anchor } from "../src/atoms/anchor";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export function OnHoverMenu({ data, setMenuClicked }) {
    let menuRef = null;
    const menuID = "#onHoverMenu";
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <li
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                our offerings
            </li>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {data.map(({ name, link, comingSoon }) =>
                    !comingSoon ? (
                        <MenuItem className={styles.menuItemDesktop}>
                            <Anchor name={name} href={link} />
                        </MenuItem>
                    ) : (
                        <MenuItem className={styles.menuItemDesktop}>
                            <p>
                                <Anchor name={name} href={link} />

                                <span className={styles.comingSoon}>
                                    coming soon
                                </span>
                            </p>
                        </MenuItem>
                    )
                )}
            </Menu>
        </div>
    );
}
