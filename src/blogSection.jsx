import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import styles from "../styles/blogSection.module.scss";
import { blogData } from "../blogsData";
import { Anchor } from "./atoms/anchor";
import Fade from "react-reveal";

export function BlogSection() {
    const { data } = blogData;

    function CardContents({ img, title, summary }) {
        return (
            <Fade bottom duration={800}>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>
                            {title
                                ? title
                                : `Card title that wraps to a new line`}
                        </Card.Title>
                        <Card.Text>
                            {summary ? summary : `summary goes here`}
                        </Card.Text>
                        <Anchor
                            color={true}
                            name="Read More >>>"
                            href={`/blog/${title ? title : ""}`}
                        />
                    </Card.Body>
                </Card>
            </Fade>
        );
    }
    return (
        <CardColumns className={styles.cardsContainer}>
            {data.map(({ img, title, summary }) => (
                <CardContents img={img} title={title} summary={summary} />
            ))}
        </CardColumns>
    );
}
