import React from 'react'
import Logo from '../Home/Logo'
import '../../styles/footer.css'

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
