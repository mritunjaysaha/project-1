import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { blogData } from "../../data";
import styles from "../../styles/blogPages.module.scss";

export default function BlogPage() {
    const router = useRouter();
    const { name } = router.query;
    // const [currentData, setCurrentData] = useState("");

    // const { data } = blogData;

    // useEffect(() => {
    //     for (let datum of data) {
    //         if (name === "a-b-c-d") {
    //             setCurrentData(datum);
    //             console.log(name.replaceAll("-", " "));
    //             break;
    //         }
    //     }
    // }, [currentData]);

    return (
        <section className={styles.blogSection}>
            <header className={styles.header}>
                {/* <img src={currentData.img} alt={name} /> */}
                <img
                    src="https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg"
                    alt=""
                />
                <h1>{name ? name.replaceAll("-", " ") : "name"}</h1>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus praesentium repudiandae quae quis fuga quod
                officia, voluptatibus reprehenderit ab odit quia mollitia sit
                molestias velit aperiam? Dolore, ducimus. Aliquid!
            </p>{" "}
        </section>
    );
}
