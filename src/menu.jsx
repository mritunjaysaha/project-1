import styles from "../styles/onHoverMenu.module.scss";
import { Anchor } from "../src/atoms/anchor";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const SubMenuContents = ({ data }) => (
    <>
        {data.map(({ name, link, comingSoon }) =>
            !comingSoon ? (
                <li>
                    <MenuItem className={styles.menuItem}>
                        <Anchor name={name} href={link} />
                    </MenuItem>
                </li>
            ) : (
                <li>
                    <MenuItem className={styles.menuItem}>
                        <p>
                            <Anchor name={name} href={link} />

                            <span className={styles.comingSoon}>
                                coming soon
                            </span>
                        </p>
                    </MenuItem>
                </li>
            )
        )}
    </>
);

const DesktopSubMenu = ({ data }) => {
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
                <ul className={styles.desktopSubMenu}>
                    <SubMenuContents data={data} />
                </ul>
            </Menu>
        </div>
    );
};

export function OnHoverMenu({ data }) {
    return (
        <>
            <DesktopSubMenu data={data} />

            {/* mobile sub menu */}
            <ul className={styles.mobileSubMenu}>
                <SubMenuContents data={data} className={styles.mobileSubMenu} />
            </ul>
        </>
    );
}
