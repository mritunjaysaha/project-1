import styles from "../styles/onHoverMenu.module.scss";
import { Anchor } from "../src/atoms/anchor";

export function OnHoverMenu({ data, setMenuClicked }) {
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
                onMouseEnter={handleClick}
                className={styles.servicesLi}
            >
                our offerings
            </li>
            <div
                id="onHoverMenu"
                className={styles.onHoverMenu}
                onMouseLeave={handleMouseLeave}
            >
                <ul>
                    {data.map((data) => {
                        return (
                            <li
                                onClick={() => {
                                    setMenuClicked(false);
                                }}
                            >
                                <Anchor name={data.name} href={data.link} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
