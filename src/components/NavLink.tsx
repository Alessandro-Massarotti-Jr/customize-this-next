import Link from "next/link";
import { MouseEvent } from "react";
import { baseColors } from "../config/baseColorsConfig";

export interface NavLinkProps {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
    function mouseEnterLink(event: MouseEvent<HTMLLIElement>) {
        const element: HTMLLIElement = event.target as HTMLLIElement;
        element.style.color = baseColors.acents;
    }

    function mouseLeaveLink(event: MouseEvent<HTMLLIElement>) {
        const element: HTMLLIElement = event.target as HTMLLIElement;
        element.style.color = baseColors.text;
    }
    return (
        <li onMouseEnter={(event) => { mouseEnterLink(event) }} onMouseLeave={(event) => { mouseLeaveLink(event) }}>
            <Link href={href}>{label}</Link>
        </li>
    )
}