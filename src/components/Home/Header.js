import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import styles from '../../styles/Header.css'

/**
 * Renders the site header with logo and navigation
 * @param {{navItems[]}} param0 
 * @returns Header component
 */
export default function Header ({navItems}) {
    return (
    <header>
        <div className="center">
            <a href="#"><Logo /></a>
            <Navigation navItems={navItems} />
        </div>
    </header>
    );
}
