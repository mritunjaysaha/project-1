import { directInvestments } from "../../data";
import { ServicePage } from "../../src/servicePages";

export default function DirectInvestments() {
    const { name, data, img } = directInvestments;

    return <ServicePage name={name} data={data} imgSrc={img} />;
}
