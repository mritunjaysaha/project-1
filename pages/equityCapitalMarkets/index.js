import { equityCapitalMarketsData } from "../../data";
import styles from "../../styles/servicePages.module.scss";

export default function EquityCapitalMarkets() {
    return (
        <section className={styles.serviceSection}>
            <article className={styles.contentArticle}>
                <h3>equity capital market</h3>
                <article>
                    {equityCapitalMarketsData.data.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
            <img
                src="https://intersectioncapital.com/wp-content/uploads/2019/03/building.jpg"
                alt="building"
            />
        </section>
    );
}
