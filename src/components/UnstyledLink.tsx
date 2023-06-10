import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

const RemoveStylingLink = styled(Link)(() => ({
    all: 'unset',
    cursor: 'pointer'
}))

const UnstyledLink = ({ children, href }: { children: ReactElement, href: string }) => (
    <RemoveStylingLink href={href} target="blank" rel="noreferrer">
        {children}
    </RemoveStylingLink>
)
export default UnstyledLink