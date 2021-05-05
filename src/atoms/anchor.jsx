import Link from "next/link";
import styles from "../../styles/anchor.module.scss";

export function Anchor({ href, name, color }) {
    return (
        <Link href={href ? href : ""}>
            <a className={color ? styles.className : ""}>{name}</a>
        </Link>
    );
}
