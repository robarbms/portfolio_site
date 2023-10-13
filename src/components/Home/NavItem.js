import React from 'react'

/*
Type NavItemProps = {
    text: string,
    link: string,
}
*/

/**
 * Rendering for nav links in the top navigation
 * @param {link, text, target?} param0 
 * @returns NavItem component
 */
export default function NavItem ({link, text, target}) {
    return (<a className="nav-link" href={link} target={target}>{text}</a>)
}