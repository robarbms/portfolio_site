import React from 'react'
import resume from '../../assets/Rob Barber.pdf'
import NavItem from './NavItem'
import { NavItemAttr } from '../../data/NavList';

/**
 * Rendering for a list of navigation items
 * @param {navIems: navItem[]} a list of navigation links 
 * @returns Navigation component
 */
export default function Navigation ({navItems}: {navItems: NavItemAttr[]}): React.JSX.Element {
    return (
        <nav>
            {
                navItems.map((navItem, key) => <NavItem key={key} {...navItem} />)
            }
            <NavItem link={resume} text="Resume" target="_blank" />
        </nav>
    );
}
