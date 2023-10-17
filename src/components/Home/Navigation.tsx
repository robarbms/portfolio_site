import React from 'react'
import resume from '../../assets/Rob Barber.pdf'
import NavItem, { NavItemProps } from './NavItem'

/**
 * Rendering for a list of navigation items
 * @param {navIems: navItem[]} props 
 * @returns Navigation component
 */
export default function Navigation ({navItems}: {navItems: NavItemProps[]}) {
    return (
        <nav>
            {
                navItems.map((navItem, key) => <NavItem key={key} {...navItem} />)
            }
            <NavItem link={resume} text="Resume" target="_blank" />
        </nav>
    );
}
