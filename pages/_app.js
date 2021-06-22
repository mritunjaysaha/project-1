import "../styles/globals.scss";
import { Navbar } from "../src/navbar";
import { Footer } from "../src/footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
