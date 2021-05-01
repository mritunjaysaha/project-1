import { useState } from "react";
import styles from "../styles/onHoverMenu.module.scss";

export function OnHoverMenu() {
    let menuRef = null;
    const menuID = "#onHoverMenu";

    function handleClick() {
        if (!menuRef) {
            menuRef = document.querySelector(menuID);
        }

        menuRef.style.display = "flex";
    }

    function handleMouseLeave() {
        if (!menuRef) {
            menuRef = document.querySelector(menuID);
        }

        menuRef.style.display = "none";
    }

    return (
        <div>
            <li
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={styles.servicesLi}
            >
                services
            </li>
            <div
                id="onHoverMenu"
                className={styles.onHoverMenu}
                onMouseLeave={handleMouseLeave}
            >
                <ul>
                    <li>equity capital markets</li>
                    <li>debt capital markets</li>
                    <li>m&amp;a advisory</li>
                    <li>direct investments</li>
                </ul>
            </div>
        </div>
    );
}
