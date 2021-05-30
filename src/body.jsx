import styles from "../styles/body.module.scss";
import { Cards } from "./cards";
import { TeamPageCards } from "./teamPageCards";
import {
    offeringsData,
    clienteleData,
    summarySectionData,
    teamData,
} from "../data";

import Zoom from "react-reveal";
import { BlogSection } from "../src/blogSection";

export function Body() {
    return (
        <>
            {/* summary of the venture */}
            <section className={styles.summarySection}>
                <div className={styles.summaryDiv1}>
                    <h1 className={styles.multiLineHeader}>
                        Who <span>we</span>{" "}
                        <span className={styles.spanColor}>are</span>
                    </h1>
                    <p>{summarySectionData.whoWeAre.description}</p>
                </div>
                <div className={styles.summaryDiv2}>
                    <h1 className={styles.multiLineHeader}>
                        What we <span className={styles.spanColor}>do</span>
                    </h1>
                    <p>{summarySectionData.whatWeDo.description}</p>
                </div>
            </section>

            {/* Offerings */}
            <section className={styles.cardsSection}>
                <h3
                    className={`${styles.multiLineHeader} ${styles.backgroundGradient1}`}
                >
                    Our core <span className={styles.spanColor}>services</span>
                </h3>
                <ul>
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
            <section className={styles.cardsSection}>
                <h3
                    className={`${styles.multiLineHeader} ${styles.backgroundGradient2}`}
                >
                    clients&nbsp;
                    <span>
                        who&nbsp;
                        <span className={styles.spanColor}>love</span>
                        &nbsp;to work
                    </span>
                    <span>&nbsp;with us</span>
                </h3>
                <ul>
                    {clienteleData.map((data) => (
                        <Cards className="clienteleCards" text={data} />
                    ))}
                </ul>
            </section>

            {/* Team page */}
            <section className={styles.teamPageSection}>
                <h3
                    className={`${styles.multiLineHeader} ${styles.backgroundGradient3}`}
                >
                    meet our <span className={styles.spanColor}>team</span>
                </h3>
                <ul>
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
                <div className={styles.trustDiv}>
                    <Zoom cascade duration={8000}>
                        <p>
                            trust is earned.
                            <br />
                            confidentiality is part of our dna.
                            <br />
                            we sign with our integrity.
                            <br />
                            period.
                        </p>
                    </Zoom>
                </div>
            </section>

            {/* blog section */}
            <section className={styles.blogCardsSection}>
                <h3 className={styles.multiLineHeader}>
                    more <span className={styles.spanColor}>insights</span>
                </h3>

                <BlogSection />
            </section>
        </>
    );
}
