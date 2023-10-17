import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { MoreContactAttr } from '../../data/MoreContactList'

/**
 * Rendering for a contact item such as phone number, email, etc.
 * @param {*} param0 
 * @returns Contact Item component
 */
export default function ContactItem ({title, text, link, icon, devIcon}: MoreContactAttr) {
    return(
        <div className="contact-item">
            <a href={link}>
                {icon ? <FontAwesomeIcon icon={icon} /> : <i className={"devicon " + icon}></i>}
                <span className="contact-text">{text}</span>
            </a>
        </div>
    )
}