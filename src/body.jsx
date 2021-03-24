import Image from "next/image";
import styles from "../styles/body.module.scss";

import { MUIButton } from "./atoms/button";

export function Body() {
    return (
        <>
            <section className={styles.section1}>
                <h3>Get the deals closed on your terms</h3>
                <section>
                    <div className={styles.placeholder}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit, quasi? Dicta, vero. Soluta ratione enim
                        exercitationem maiores iusto cumque veritatis sequi ab
                        cupiditate, voluptatibus illo! Voluptates corporis
                        repellat tempore iure temporibus, nostrum blanditiis. Ea
                        quaerat consectetur, dolorum quod hic iusto vel id
                        adipisci perspiciatis accusantium nam asperiores natus
                        velit veniam minus. Natus doloribus sed rerum, enim
                        suscipit ullam officia impedit! Laboriosam, sed
                        reprehenderit beatae aspernatur quam suscipit fuga
                        impedit inventore. Voluptas, beatae. Quidem harum sit,
                        libero magni omnis porro blanditiis.
                    </p>
                </section>
            </section>

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

            <section className={styles.section3}>
                <h3>Get in touch with us</h3>
                <div className={styles.btnContainer}>
                    <MUIButton name="button" />
                </div>
            </section>
        </>
    );
}
