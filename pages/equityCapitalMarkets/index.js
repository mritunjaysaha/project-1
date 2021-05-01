import { equityCapitalMarketsData } from "../../src/data";

export default function EquityCapitalMarkets() {
    return (
        <section>
            <article>
                <h3>equity capital market</h3>
                <article>
                    {equityCapitalMarketsData.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
        </section>
    );
}
