import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ServicePage } from "../../src/servicePages";
import { ourOfferingContentsData } from "../../data";
import { ComingSoonPage } from "../../src/comingSoonPage";

export default function OurOfferings() {
    const router = useRouter();
    const { name } = router.query;
    console.log({ name });
    const [currentData, setCurrentData] = useState("");

    const keys = Object.keys(ourOfferingContentsData);

    useEffect(() => {
        for (let key of keys) {
            if (name === key) {
                setCurrentData(ourOfferingContentsData[key]);
                break;
            }
        }
    }, [name, currentData]);

    console.log({ currentData });

    return (
        <>
            {currentData != false ? (
                !currentData.comingSoon ? (
                    <ServicePage
                        name={currentData.name}
                        data={currentData.data}
                        imgSrc={currentData.img}
                    />
                ) : (
                    <ComingSoonPage />
                )
            ) : (
                ""
            )}
        </>
    );
}
