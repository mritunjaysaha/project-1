import Link from "next/link";

export function Anchor({ href, name }) {
    return (
        <Link href={href}>
            <a>{name}</a>
        </Link>
    );
}
