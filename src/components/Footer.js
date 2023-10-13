import React from 'react'
import styles from '../styles/footer.css'
import Logo from './Logo'

/**
 * Renders a basic site footer
 * @returns Footer component
 */
export default function Footer () {
    return(
        <footer>
            <div className="center">
                <Logo />
                &#169; 2023 Rob Barber
            </div>
        </footer>
    )
}
