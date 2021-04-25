import styles from "../../styles/solutions.module.scss";
import { MUIButton } from "../../src/atoms/button";

export default function Solution() {
    return (
        <>
            <section className={styles.section2}>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                </ul>
                <div className={styles.btnContainer}>
                    <MUIButton name="button" color="primary" size="large" />
                </div>
            </section>
        </>
    );
}
