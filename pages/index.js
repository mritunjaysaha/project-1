import Head from "next/head";
import { Header } from "../src/header";
import { Body } from "../src/body";
import { companyName } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{companyName ? companyName.name : ""}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Body />
        </div>
    );
}
