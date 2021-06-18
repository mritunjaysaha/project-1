import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { blogData } from "../../blogsData";
import Particles from "react-tsparticles";
import styles from "../../styles/blogPages.module.scss";
import Parallax from "parallax-js";

const ParticlesJS = () => (
    <Particles
        id="particle-js"
        className={styles.particleJS}
        options={{
            fpsLimit: 60,
            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#ffffff",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    resize: true,
                },
            },
        }}
    />
);

export default function BlogPage() {
    const router = useRouter();
    const { name } = router.query;

    // const [currentData, setCurrentData] = useState("");

    const { data } = blogData;

    // useEffect(() => {
    //     for (let datum of data) {
    //         if (name === datum.id) {
    //             setCurrentData(datum);
    //             break;
    //         }
    //     }
    // });
    const currentData = data[0];

    // useEffect(() => {
    //     const scene = document.querySelector("#scene");
    //     new Parallax(scene, { invertX: false, invertY: false });
    // });

    return (
        <>
            <section className={styles.blogSection}>
                <div className={styles.overlay}>
                    <h3>{currentData.title}</h3>
                </div>
                <header className={styles.parallax} id="scene">
                    <div className={styles.overlay}></div>

                    <div data-depth="0.4" className={styles.layer}>
                        <ParticlesJS />
                    </div>
                    <div data-depth="0.3" className={styles.layer}></div>
                </header>
            </section>
            <section className={styles.blogContentsContainer}>
                {currentData != false ? currentData.fullDescription() : ""}
            </section>
        </>
    );
}
