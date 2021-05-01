import { debtCapitalMarketsData } from "../../data";

export default function DebtCapitalMarkets() {
    return (
        <section>
            <article>
                <h3>debt capital market</h3>
                <article>
                    {debtCapitalMarketsData.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
        </section>
    );
}
