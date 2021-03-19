import Head from "next/head";
import styles from "../styles/home.module.scss";
import { Navbar } from "../src/navbar";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <header className={styles.header}>
                Lorem ipsum dolor sit amet.
            </header>
            {/* <footer className={styles.footer}></footer> */}
        </div>
    );
}
