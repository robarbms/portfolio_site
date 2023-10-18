import React from 'react'
import { NavItemAttr } from '../../data/NavList'

/**
 * Rendering for nav links in the top navigation
 * @param {link, text, target?} param0 
 * @returns NavItem component
 */
export default function NavItem ({link, text, target}: NavItemAttr): React.JSX.Element {
    return (<a className="nav-link" href={link} target={target}>{text}</a>)
}
