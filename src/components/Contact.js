import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/contact.css'
import emailjs from "@emailjs/browser"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactItem from "./ContactItem"
import sendMail from "./sendMail"

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


export default function Contact (props) {
    const [mailSent, setMailSent] = useState(false);
    const form = useRef(null);

    function sendEmail (evnt) {
        evnt.preventDefault();
      
        emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', form.current, 'gDDSsv52CVL0p2sKS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        form.current.reset();
        setMailSent(true);

        setTimeout(() => {
            setMailSent(false);
        }, 3000);
    }

    useEffect(() => {
        form.current.addEventListener("submit", sendEmail);
        return () => (form.current.removeEventListener("submit", sendMail));
    }, [])

    return(
        <section className="contact">
            <div className="center">
                <a name="contact" className="jump-to"></a>
                <h2>Contact</h2>
                <div className="contact-layout">
                    <form className="contact_form" ref={form}>
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
                        <div className="contact_confirm">
                            <h2>Email sent!</h2>
                            <p>Thanks for your message, I will get back to you soon.</p>
                        </div>
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
