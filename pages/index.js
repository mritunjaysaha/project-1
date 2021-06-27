import Head from "next/head";
import { Header } from "../src/header";
import { Body } from "../src/body";
import { companyName } from "../data";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{companyName ? companyName.name : ""}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Maneuver Ventures" />
            </Head>

            <Header />
            <Body />
        </div>
    );
}
