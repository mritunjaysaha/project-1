import Image from "next/image";
import styles from "../styles/body.module.scss";
import { Cards } from "./cards";
import { TeamPageCards } from "./teamPageCards";
import { MUIButton } from "./atoms/button";
import { offeringsData, clienteleData } from "./data";

export function Body() {
    return (
        <>
            {/* <section className={styles.section1}>
                <h3>get the deals closed on your own terms</h3>

                <div className={styles.placeholder}></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit, quasi? Dicta, vero. Soluta ratione enim exercitationem
                    maiores iusto cumque veritatis sequi ab cupiditate,
                    voluptatibus illo! Voluptates corporis repellat tempore iure
                    temporibus, nostrum blanditiis. Ea quaerat consectetur,
                    dolorum quod hic iusto vel id adipisci perspiciatis
                    accusantium nam asperiores natus velit veniam minus. Natus
                    doloribus sed rerum, enim suscipit ullam officia impedit!
                    Laboriosam, sed reprehenderit beatae aspernatur quam
                    suscipit fuga impedit inventore. Voluptas, beatae. Quidem
                    harum sit, libero magni omnis porro blanditiis.
                </p>
            </section> */}

            {/* summary of the venture */}
            {/* <section className={styles.section1}>
                <div>
                    <h1>Who we are</h1>
                    <p>XXX capital is an independently owned</p>
                </div>
                <div>
                    <h1>What we do</h1>
                    <p>
                        We've been studying trends about what drives decisions.
                        Cause it's not about the info you present, it's about
                        how you retain their attention. And finally at the end
                        of that they are curious and emotionally invested in the
                        deal. That's how we're able to get the deal on our own
                        terms for our clients. Plus we are able to retain that
                        element of fun and excitement. Plus the bigger the
                        stakes with the deal, the more exciting it is for us
                    </p>
                </div>
            </section> */}
            {/* Offerings */}
            <section className={styles.cardsSection}>
                <h3>Our core services</h3>
                <ul>
                    {offeringsData.map((data) => (
                        <Cards className="offeringCards" text={data} />
                    ))}
                </ul>
            </section>

            {/* Clientele */}
            <section className={styles.cardsSection}>
                <h3>clients who love to work with us</h3>
                <ul>
                    {clienteleData.map((data) => (
                        <Cards className="clienteleCards" text={data} />
                    ))}
                </ul>
            </section>

            {/* Team page */}
            <section className={styles.teamPageSection}>
                <h3>team page</h3>
                <ul>
                    <TeamPageCards />
                    <TeamPageCards />
                </ul>
            </section>

            {/* secret section */}
            <section className={styles.secretSection}>
                <div className={styles.secretDiv}>
                    <p>
                        Yes, we can keep <span>a secret</span>
                        <br />
                        That's why you probably haven't heard of us
                    </p>
                </div>
                <div className={styles.trustDiv}>
                    <p>
                        trust is earned.
                        <br />
                        confidentiality is part of our dna.
                        <br />
                        we sign with our integrity.
                        <br />
                        period.
                    </p>
                </div>
            </section>

            {/* <section className={styles.section3}>
                <h3>Get in touch with us</h3>
                <div className={styles.btnContainer}>
                    <MUIButton name="button" />
                </div>
            </section> */}
        </>
    );
}
