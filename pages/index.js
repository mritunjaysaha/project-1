import Head from "next/head";
import { Header } from "../src/header";
import { Body } from "../src/body";
import { useRouter } from "next/router";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Body />
        </div>
    );
}
