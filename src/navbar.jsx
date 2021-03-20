import styles from "../styles/navbar.module.scss";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

export function Navbar() {
    const navbarLinks = [
        { name: "aaa", link: "#" },
        { name: "aaa", link: "#" },
        { name: "aaa", link: "#" },
    ];

    return (
        <nav className={styles.navbar}>
            <div>Lorem, ipsum.</div>

            <MenuTwoToneIcon fontSize="large" />
            {/* {navbarLinks.map((link) => (
                <li>{link.name}</li>
            ))} */}
        </nav>
    );
}
