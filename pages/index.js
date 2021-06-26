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
                <meta name="description" content="Maneuver Ventures" />
                <script id="mcjs">
                    !function(c,h,i,m,p)
                    {
                        ((m = c.createElement(h)),
                        (p = c.getElementsByTagName(h)[0]),
                        (m.async = 1),
                        (m.src = i),
                        p.parentNode.insertBefore(m, p))
                    }
                    (document,"script","https://chimpstatic.com/mcjs-connected/js/users/e654510bb63cf53256868ec7e/8116d5a2085af6e4113b8d126.js");
                </script>
            </Head>

            <Header />
            <Body />
        </div>
    );
}
