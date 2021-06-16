import styles from "../styles/header.module.scss";
import Fade from "react-reveal/Fade";
import BackgroundSlideshow from "react-background-slideshow";
import { backgroundSlideshowImages } from "../data";

export function Header() {
    return (
        <header className={styles.initialPage}>
            <BackgroundSlideshow
                images={[
                    "/assets/city1.jpg",
                    "/assets/city2.jpg",
                    "/assets/city3.jpg",
                    "/assets/city4.jpg",
                ]}
                animationDelay="2000"
            />
            <Fade bottom duration={1000}>
                <h3>Advisory Services for Growing Companies</h3>
            </Fade>
        </header>
    );
}
