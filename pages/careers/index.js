import styles from "../../styles/careers.module.scss";
import { careersPageData } from "../../data";
import { MUIButton } from "../../src/atoms/button";

const ATag = ({ link, name }) => <a href={link}>{name}</a>;

export default function Careers() {
    const { data, buttonName } = careersPageData;
    return (
        <section className={styles.careersSection}>
            <header className={styles.careersHeader}>
                <h1 className={`${styles.multiLineHeader} ${styles.noMargin}`}>
                    what's your next&nbsp;
                    <span
                        className={`${styles.spanContainer} ${styles.spanColor}`}
                    >
                        destination <span>?</span>
                    </span>
                </h1>
            </header>
            <ul className={styles.careersContainer}>
                {data.map((data) => (
                    <li className={styles.careersCards}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <MUIButton
                            name={<ATag name={buttonName} link={data.link} />}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
