import Head from "next/head";
import { Navbar } from "../src/navbar";
import { Header } from "../src/header";
import { Body } from "../src/body";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Navbar className="navbar" />

            <Body />
        </div>
    );
}
