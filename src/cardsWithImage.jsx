import { Anchor } from "./atoms/anchor";
import styles from "../styles/cardsWithImage.module.scss";

export function CardsWithImages({ img, name, description }) {
    return (
        <article className={styles.cardsOuter}>
            <img
                src="https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg"
                alt=""
            />
            <article className={styles.cardsContents}>
                <h1>{name ? name : "Lorem ipsum dolor sit amet."}</h1>
                <p>
                    {description
                        ? description
                        : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus ab quae repellendus nesciunt at? Ipsam, nisi?
                    Molestias magnam dolorem quod.`}
                </p>
                <Anchor
                    color={true}
                    name="Read More >>"
                    href={`/blog/${name}`}
                />{" "}
            </article>
        </article>
    );
}
