import { debtCapitalMarketsData } from "../../data";
import { ServicePage } from "../../src/servicePages";

export default function DebtCapitalMarkets() {
    const { name, data, img } = debtCapitalMarketsData;

    return <ServicePage name={name} data={data} imgSrc={img} />;
}
