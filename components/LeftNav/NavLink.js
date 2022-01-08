import Link from "next/link";

import { Wrapper } from "./NavLinkStyles";

function NavLink({ Icon, text, active, href }) {
    return (
        <Link href={href} passHref>
            <Wrapper active={active}>
                <Icon /><h2>{text}</h2>
            </Wrapper>
        </Link>
    )
}

export default NavLink
