import { Anchor } from "./atoms/anchor";
import styles from "../styles/cardsWithImage.module.scss";

export function CardsWithImages({ img, name, description }) {
    console.log(name.replace(/-/g, " "));
    name = name ? name.replace(/-/g, " ") : "";

    return (
        <article className={styles.cardsOuter}>
            <img src={img ? img : ""} alt={name ? name : ""} />
            <article className={styles.cardsContents}>
                <h1>{name ? name : ""}</h1>
                <p>
                    {description
                        ? description
                        : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus ab quae repellendus nesciunt at? Ipsam, nisi?
                    Molestias magnam dolorem quod.`}
                </p>
                <Anchor
                    color={true}
                    name="Read More >>>"
                    href={`/blog/${name ? name : ""}`}
                />{" "}
            </article>
        </article>
    );
}
