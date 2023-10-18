import React from 'react'
import { MoreContactAttr } from '../../data/MoreContactList'
import PhoneIcon from './PhoneIcon'
import MailIcon from './MailIcon'

/**
 * Rendering for a contact item such as phone number, email, etc.
 * @param {*} param0 
 * @returns Contact Item component
 */
export default function ContactItem ({title, text, link, icon, devIcon}: MoreContactAttr) {
    return(
        <div className="contact-item">
            <a href={link}>
                {icon && icon=="phone" ? <PhoneIcon /> : icon && icon == "email" ? <MailIcon /> : <i className={"devicon " + devIcon}></i>}
                <span className="contact-text">{text}</span>
            </a>
        </div>
    )
}