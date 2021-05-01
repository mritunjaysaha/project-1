import { equityCapitalMarketsData } from "../../data";
import { ServicePage } from "../../src/servicePages";

export default function EquityCapitalMarkets() {
    const { name, data, img } = equityCapitalMarketsData;

    return <ServicePage name={name} data={data} imgSrc={img} />;
}
