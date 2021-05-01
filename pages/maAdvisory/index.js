import { maAdvisory } from "../../src/data";

export default function MaAdvisory() {
    return (
        <section>
            <article>
                <h3>m&amp;a advisory</h3>
                <article>
                    {maAdvisory.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
        </section>
    );
}
