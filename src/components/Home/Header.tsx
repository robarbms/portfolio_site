import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import { NavItemAttr } from '../../data/NavList'
import '../../styles/Header.css'

/**
 * Renders the site header with logo and navigation
 * @param {{navItems[]}} navItems - an array of text links for the header 
 * @returns Header component
 */
export default function Header ({navItems}: {navItems: NavItemAttr[]}): React.JSX.Element {
    return (
    <header>
        <div className="center">
            <a href="#"><Logo /></a>
            <Navigation navItems={navItems} />
        </div>
    </header>
    );
}
