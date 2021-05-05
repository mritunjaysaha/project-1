import { useRouter } from "next/router";
import { blogData } from "../../data";

export default () => {
    const router = useRouter();
    const { name } = router.query;

    return <h1>{name}</h1>;
};
