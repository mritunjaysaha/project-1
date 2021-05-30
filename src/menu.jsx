import styles from "../styles/onHoverMenu.module.scss";
import { Anchor } from "../src/atoms/anchor";
import { useState } from "react";
import Button from "@material-ui/core/Button";
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

    // function handleClick() {
    //     if (!menuRef) {
    //         menuRef = document.querySelector(menuID);
    //     }

    //     menuRef.style.display = "flex";
    // }

    // function handleMouseLeave() {
    //     if (!menuRef) {
    //         menuRef = document.querySelector(menuID);
    //     }

    //     menuRef.style.display = "none";
    // }

    return (
        // <div>
        //     <li
        //         aria-controls="simple-menu"
        //         aria-haspopup="true"
        //         onMouseEnter={handleClick}
        //         // onMouseLeave={handleMouseLeave}
        //         className={styles.servicesLi}
        //     >
        //         our offerings
        //     </li>
        //     <Fade duration={800}>
        //         <div
        //             id="onHoverMenu"
        //             className={styles.onHoverMenu}
        //             onMouseLeave={handleMouseLeave}
        //         >
        //             <ul>
        //                 {data.map((data) => {
        //                     return (
        //                         <li
        //                             onClick={() => {
        //                                 setMenuClicked(false);
        //                             }}
        //                         >
        //                             {!data.comingSoon ? (
        //                                 <Anchor
        //                                     name={data.name}
        //                                     href={data.link}
        //                                 />
        //                             ) : (
        //                                 <p>
        //                                     initial coin offering
        //                                     <span className={styles.comingSoon}>
        //                                         coming soon!
        //                                     </span>
        //                                 </p>
        //                             )}
        //                         </li>
        //                     );
        //                 })}
        //             </ul>
        //         </div>
        //     </Fade>
        // </div>

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
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}

                {data.map(({ name, link }) => (
                    <MenuItem className={styles.menuItem}>
                        <Anchor name={name} href={link} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
