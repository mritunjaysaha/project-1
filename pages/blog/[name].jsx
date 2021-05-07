import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { blogData } from "../../data";
import styles from "../../styles/blogPages.module.scss";

export default function BlogPage() {
    const router = useRouter();
    const { name } = router.query;
    const { data } = blogData;
    const currentData = data[0];

    console.log({ currentData });
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
                <img src={currentData.img} alt={name} />
                <h1>{name ? name.replaceAll("-", " ") : "name"}</h1>
            </header>
            <section className={styles.blogContentsContainer}>
                <p>{currentData.summary}</p>
                {currentData.fullDescription.map((data) => {
                    const { head, desc } = data;
                    return (
                        <div className={styles.blogContainer}>
                            <h3>{head}</h3>
                            {desc.map((d) => {
                                return <p>{d}</p>;
                            })}
                        </div>
                    );
                })}
            </section>
        </section>
    );
}
