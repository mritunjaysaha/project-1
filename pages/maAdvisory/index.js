import { maAdvisory } from "../../data";
import { ServicePage } from "../../src/servicePages";

export default function MaAdvisory() {
    const { name, data, img } = maAdvisory;

    return <ServicePage name={name} data={data} imgSrc={img} />;
}
