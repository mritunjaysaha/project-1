import Link from "next/link";

export function Anchor({ href, name }) {
    <Link href={href ? href : "#"}>
        <a>{name ? name : "loading"}</a>
    </Link>;
}
