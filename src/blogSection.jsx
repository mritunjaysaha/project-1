import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import styles from "../styles/blogSection.module.scss";
import { blogData } from "../blogsData";
import { Anchor } from "./atoms/anchor";
import Fade from "react-reveal";

function CardContents({ img, title, summary, id }) {
    return (
        <Fade bottom duration={800}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>
                            {title
                                ? title
                                : `Card title that wraps to a new line`}
                        </h3>
                    </Card.Title>
                    <Card.Text>
                        <p>{summary ? summary : `summary goes here`}</p>
                    </Card.Text>
                    <Anchor
                        color={true}
                        name="Read More >>>"
                        href={`/blog/${id ? id : ""}`}
                    />
                </Card.Body>
            </Card>
        </Fade>
    );
}

export function BlogSection() {
    const { data } = blogData;

    return (
        <CardColumns className={styles.cardsContainer}>
            {data.map(({ img, title, summary, id }) => (
                <CardContents
                    img={img}
                    title={title}
                    summary={summary}
                    id={id}
                />
            ))}
        </CardColumns>
    );
}
