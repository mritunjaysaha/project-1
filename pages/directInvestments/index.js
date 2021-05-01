import { directInvestments } from "../../data";

export default function DirectInvestments() {
    return (
        <section>
            <article>
                <h3>direct investments</h3>
                <article>
                    {directInvestments.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
        </section>
    );
}
