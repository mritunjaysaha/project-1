import styles from "../../styles/contactUs.module.scss";
import { Anchor } from "../../src/atoms/anchor";

export default function ContactUsPage() {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.contentsContainer}>
                <h1>Get in touch with us</h1>
                {/* <div className={styles.anchorContainer}>
                    <Anchor name="contact us" href="/" />
                </div> */}
            </div>
        </section>
    );
}
