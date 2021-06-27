import styles from "../styles/body.module.scss";
import { Cards } from "./cards";
import { TeamPageCards } from "./teamPageCards";
import { offeringsData, clienteleData, teamData } from "../data";
import Zoom from "react-reveal";
import { BlogSectionForHomePage } from "../src/blogs/blogSection";
import { Anchor } from "../src/atoms/anchor";

export function Body() {
    return (
        <>
            {/* Offerings */}
            <section className={styles.cardsSection}>
                <div className={`${styles.backgroundBlack}`}>
                    <h3 className={`${styles.multiLineHeader}`}>
                        Our core
                        <span className={styles.spanColor}>services</span>
                        <div
                            className={`${styles.horizontalBorder} ${styles.backgroundWhite}`}
                        ></div>
                    </h3>
                </div>
                <ul className={styles.cardsGridUL}>
                    {offeringsData.map((data) => {
                        return (
                            <Cards
                                className="offeringCards"
                                text={data.name}
                                link={data.link}
                            />
                        );
                    })}
                </ul>
            </section>

            {/* Clientele */}
            <section className={`${styles.cardsSection} ${styles.gradient1}`}>
                <div className={styles.backgroundBlack}>
                    <h3
                        className={`${styles.multiLineHeader} ${styles.backgroundBlack}`}
                    >
                        clients&nbsp;
                        <span>
                            who&nbsp;
                            <span className={styles.spanColor}>love</span>
                            to work
                        </span>
                        <span>&nbsp;with us</span>
                        <div
                            className={`${styles.horizontalBorder} ${styles.backgroundWhite}`}
                        ></div>
                    </h3>
                </div>
                <ul className={`${styles.cardsGridUL}`}>
                    {clienteleData.map((data) => (
                        <Cards className="clienteleCards" text={data} />
                    ))}
                </ul>
            </section>

            {/* Team page */}
            <section className={styles.cardsSection}>
                <div className={`${styles.backgroundBlack}`}>
                    <h3 className={`${styles.multiLineHeader}`}>
                        Meet our
                        <span className={styles.spanColor}>Team</span>
                        <div
                            className={`${styles.horizontalBorder} ${styles.backgroundWhite}`}
                        ></div>
                    </h3>
                </div>
                <ul className={styles.cardsFlexUL}>
                    {teamData
                        ? teamData.map(
                              ({ name, img, designation, linkedin }) => (
                                  <TeamPageCards
                                      name={name}
                                      designation={designation}
                                      img={img}
                                      href={linkedin}
                                  />
                              )
                          )
                        : ""}
                </ul>
            </section>

            {/* secret section */}
            <section className={styles.secretSection}>
                <div className={styles.secretDiv}>
                    <Zoom cascade duration={8000}>
                        <h3 className={styles.multiLineHeader}>
                            Yes, we can keep
                            <span className={styles.spanColor}>a secret</span>
                        </h3>
                        <p>That's why you probably haven't heard of us</p>
                    </Zoom>
                </div>
            </section>

            {/* blog section */}
            <section className={styles.blogSection}>
                <div className={`${styles.backgroundBlack}`}>
                    <h3 className={`${styles.multiLineHeader}`}>
                        Our
                        <span className={styles.spanColor}>Blogs</span>
                        <div
                            className={`${styles.horizontalBorder} ${styles.backgroundWhite}`}
                        ></div>
                    </h3>
                </div>
                <BlogSectionForHomePage />
                <div className={styles.moreButton}>
                    <Anchor name="more" href="/blogs" />
                </div>
            </section>
        </>
    );
}
