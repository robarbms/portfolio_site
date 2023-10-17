/**
 * Basic type for a NavItem
 */
export type NavItemAttr = {
    link: string,
    text: string,
    target?: "_blank"
}

/**
 * Link items used in the top navigation
 */
const NavList: NavItemAttr[] = [
    {
        link: "#",
        text: "Home"
    },
    {
        link: "#projects",
        text: "Projects"
    },
    {
        link: "#experience",
        text: "Experience"
    },
    {
        link: "#contact",
        text: "Contact"
    }
];

export default NavList;