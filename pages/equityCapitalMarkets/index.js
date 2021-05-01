import { equityCapitalMarketsData } from "../../data";

export default function EquityCapitalMarkets() {
    return (
        <section>
            <article>
                <h3>equity capital market</h3>
                <article>
                    {equityCapitalMarketsData.data.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
        </section>
    );
}
