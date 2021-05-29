import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { blogData } from "../../blogsData";
import styles from "../../styles/blogPages.module.scss";

export default function BlogPage() {
    const router = useRouter();
    const { name } = router.query;
    console.log("name: ", name);

    const [currentData, setCurrentData] = useState("");

    const { data } = blogData;

    useEffect(() => {
        for (let datum of data) {
            if (name === datum.name) {
                setCurrentData(datum);
                break;
            }
        }
    }, [currentData]);

    return (
        <section className={styles.blogSection}>
            <header className={styles.header}>
                <img src={currentData.img} alt={name} />
                <h1>{name ? name.replaceAll("-", " ") : "name"}</h1>
            </header>
            <section className={styles.blogContentsContainer}>
                {currentData
                    ? currentData.fullDescription.map((data) => {
                          const { head, desc } = data;
                          return (
                              <div className={styles.blogContainer}>
                                  <h3>{head}</h3>
                                  {desc.map((d) => {
                                      return <p>{d}</p>;
                                  })}
                              </div>
                          );
                      })
                    : ""}
            </section>
        </section>
    );
}
