import styles from "../../styles/careers.module.scss";
import { careersPageData } from "../../data";
import { MUIButton } from "../../src/atoms/button";

const ATag = ({ link, name }) => (
    <a rel="noopener" href={link}>
        {name}
    </a>
);

export default function Careers() {
    const { data, buttonName } = careersPageData;

    const CareerJSX = () => (
        <>
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
            <ul className={styles.careersCardsContainer}>
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
        </>
    );

    return (
        <section className={styles.careersSection}>
            {data.length ? (
                <CareerJSX />
            ) : (
                <header className={styles.careersHeader}>
                    <h1 className={styles.multiLineHeader}>
                        coming <span className={styles.spanColor}>soon</span>
                    </h1>
                </header>
            )}
        </section>
    );
}
