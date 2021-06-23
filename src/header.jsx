import styles from "../styles/header.module.scss";
import Fade from "react-reveal/Fade";
import BackgroundSlideshow from "react-background-slideshow";
import { backgroundSlideshowImages } from "../data";

export function Header() {
    return (
        <header className={styles.initialPage}>
            <BackgroundSlideshow
                images={backgroundSlideshowImages.data}
                animationDelay={2000}
            />
            <Fade bottom duration={1000}>
                <h3>Advisory Services for Growing Companies</h3>
            </Fade>
        </header>
    );
}
