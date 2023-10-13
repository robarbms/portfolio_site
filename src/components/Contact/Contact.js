import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/contact.css'
import emailjs from "@emailjs/browser"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactItem from "./ContactItem"
import MailSubmit from "./MailSubmit"

const more_contact = [
    {
        title: "Telephone",
        text: "(425) 736-0936",
        link: "tel:4257360936",
        icon: faPhone,
        iconType: "fontawesome"
    },
    {
        title: "Email",
        text: "rob@robjbarber.com",
        link: "mailto:rob@robjbarber.com",
        icon: faEnvelope,
        iconType: "fontawesome"
    },
    {
        title: "LinkedIn",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/rob-barber-4a05b83/",
        icon: "devicon-linkedin-plain",
        iconType: "devicon"
    }
]

function getValidEmail (email) {
    let match = email && email.match(/.+@.+\..+/);
    return match && match.length > 0;
}

function getValidMessage (message) {
    if (message === null || message === undefined) return false;
    let message_clean = message.trim();
    if (message_clean.length === 0) {
        return false;
    }
    return true;
}

export default function Contact (props) {
    const [mailSent, setMailSent] = useState(false);
    const form = useRef(null);
    const isValidEmail = useRef(false);
    const isValidMessage = useRef(false);

    function sendEmail (evnt) {
        evnt.preventDefault();
        let timeout = 3000;
        let email = form.current.user_email.value;
        let message = form.current.message.value;
        isValidEmail.current = getValidEmail(email);
        isValidMessage.current = getValidMessage(message);

        if(isValidEmail.current && isValidMessage.current && !mailSent) {
            emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', form.current, 'gDDSsv52CVL0p2sKS')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    
            form.current.reset();
            timeout = 10000;
        }
        setMailSent(true);

        setTimeout(() => {
            setMailSent(false);
        }, timeout);
    }

    return(
        <section className="contact">
            <div className="center">
                <a name="contact" className="jump-to"></a>
                <h2>Contact</h2>
                <div className="contact-layout">
                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="name_form">
                            <label>Name</label>
                            <input name="user_name" className="name_field" type="text" placeholder="Your name" />
                        </div>
                        <div className="email_form">
                            <label>Email</label>
                            <input name="user_email" className="email_field" type="text" placeholder="Your email address" />
                        </div>
                        <div className="message_form">
                            <label>Message</label>
                            <textarea name="message" className="message" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" class="button">Send &rarr;</button>
                        {mailSent == true &&
                            <MailSubmit isValidEmail={isValidEmail.current} isValidMessage={isValidMessage.current} />
                        }
                    </form>
                    <div className="contact_info">
                        <h3>Other ways to connect with me.</h3>
                        {more_contact.map((contact, index) => (
                            <ContactItem key={index} {...contact} />
                        ))}
                    </div>
                </div>  
            </div>
        </section>
    );
}
