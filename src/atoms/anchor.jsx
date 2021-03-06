import Link from "next/link";
import styles from "../../styles/anchor.module.scss";

export function Anchor({ href, name }) {
    return (
        <Link href={href ? href : "#"}>
            <a rel="noopener" className={styles.anchor}>
                {name}
            </a>
        </Link>
    );
}
