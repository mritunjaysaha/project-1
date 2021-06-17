import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { blogData } from "../../blogsData";
import Particles from "react-tsparticles";
import styles from "../../styles/blogPages.module.scss";

export default function BlogPage() {
    const router = useRouter();
    const { name } = router.query;

    const [currentData, setCurrentData] = useState("");

    const { data } = blogData;
    useEffect(() => {
        for (let datum of data) {
            if (name === datum.title) {
                setCurrentData(datum);
                break;
            }
        }
    }, [currentData]);

    if (process.browser) {
        require("pathseg");
    }

    function handleParticles(event) {
        const target = document.getElementById("particles-js");
        target.x = event.offsetX;
        target.y = event.offsetY;
    }

    return (
        <section className={styles.blogSection}>
            <header className={styles.header}>
                {/* <img src={currentData.img} alt={name} />
                <h1>{name}</h1> */}
                {/* <Particles
                    id="particles-js"
                    onMouseMove={handleParticles}
                    options={{
                        background: {
                            color: {
                                value: "#0d47a1",
                            },
                        },
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 80,
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
                                value: 5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 20,
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
                                random: true,
                                straight: false,
                                out_mode: "bounce",
                                bounce: true,
                                line_linked: true,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                // grab: {
                                //     distance: 400,
                                //     line_linked: {
                                //         opacity: 1,
                                //     },
                                // },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                // push: {
                                //     particles_nb: 4,
                                // },
                                // remove: {
                                //     particles_nb: 2,
                                // },
                            },
                        },

                        detectRetina: true,
                    }}
                /> */}
            </header>
            <section className={styles.blogContentsContainer}>
                {/* {currentData
                    ? currentData.fullDescription.map((data) => {
                          const { head, desc } = data;
                          return (
                              <div className={styles.blogContainer}>
                                  <h3>{head}</h3>
                              </div>
                          );
                      })
                    : ""
                    } */}
            </section>
        </section>
    );
}
