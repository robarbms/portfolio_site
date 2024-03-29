import React from 'react'
import '../../styles/logo.css'

/**
 * Site logo, RB
 * @returns Logo component
 */
export default function Logo (): React.JSX.Element {
    return(
        <div className="logo">
            <div className="logo-border"></div>
            <span className="logo-r">R</span>
            <span className="logo-b">B</span>
        </div>
    );
}
