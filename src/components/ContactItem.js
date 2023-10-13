import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Rendering for a contact item such as phone number, email, etc.
 * @param {*} param0 
 * @returns Contact Item component
 */
export default function ContactItem ({title, text, link, icon, iconType}) {
    return(
        <div className="contact-item">
            <a href={link}>
                {iconType == "fontawesome" ? <FontAwesomeIcon icon={icon} /> : <i className={"devicon " + icon}></i>}
                <span className="contact-text">{text}</span>
            </a>
        </div>
    )
}