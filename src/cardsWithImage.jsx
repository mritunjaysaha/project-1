import { Anchor } from "./atoms/anchor";
import styles from "../styles/cardsWithImage.module.scss";
import Fade from "react-reveal";

export function CardsWithImages({ img, name, description }) {
    return (
        <Fade bottom duration={800}>
            <article className={styles.cardsOuter}>
                <img src={img ? img : ""} alt={name ? name : ""} />
                <article className={styles.cardsContents}>
                    <h1>{name ? name.replace(/-/g, " ") : ""}</h1>
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
        </Fade>
    );
}
