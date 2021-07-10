import { navbarData } from "../data";
import { Anchor } from "../src/atoms/anchor";
import styles from "../styles/footer.module.scss";

function getYear() {
    const dateObj = new Date();
    return dateObj.getFullYear();
}

function ListAnchor({ name, href }) {
    return (
        <li>
            <Anchor name={name} href={href} />
        </li>
    );
}

export function Footer() {
    const { company, contact, newsLetter, careers, services } = navbarData;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.companyLogo}>
                    <h1>
                        <Anchor name={company.name} href={company.link} />
                    </h1>
                    <p>&copy; Copyrights. All rights reserved {getYear()}</p>
                </div>
                <ul className={styles.ourOfferings}>
                    <h1>
                        {services.name}
                        <div
                            className={`${styles.horizontalBorder} ${styles.backgroundWhite}`}
                        ></div>
                    </h1>
                    {services.subMenuData.map(({ name, link }) => {
                        return (
                            <ListAnchor
                                name={name}
                                href={`/ourOfferings/${link}`}
                            />
                        );
                    })}
                </ul>
                <ul className={styles.others}>
                    <ListAnchor name={careers.name} href={careers.link} />
                    <ListAnchor name={contact.name} href={contact.link} />
                    <ListAnchor name={newsLetter.name} href={newsLetter.link} />
                </ul>
            </div>
            the svg has been taken from SVGBackgrounds.com.
        </footer>
    );
}
