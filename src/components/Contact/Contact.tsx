import React, { useRef, useState, useEffect } from 'react'
import emailjs from "@emailjs/browser"
import ContactItem from "./ContactItem"
import MailSubmit from "./MailSubmit"
import { MoreContactAttr } from '../../data/MoreContactList'
import '../../styles/contact.css'

/**
 * Checks that the provided email address looks like an email address
 * @param email - string representation of an email address
 * @returns boolean
 */
function getValidEmail (email: string): boolean {
    let match: RegExpMatchArray | null | boolean = !!email && email.match(/.+@.+\..+/);
    return !!(match && match.length > 0);
}

/**
 * Basic check that the message isn't empty.
 * May expand logic here later
 * @param message - message as string
 * @returns boolean
 */
function getValidMessage (message: string): boolean {
    if (message === null || message === undefined) return false;
    let message_clean = message.trim();
    if (message_clean.length === 0) {
        return false;
    }
    return true;
}

/**
 * Basic Contact form
 * @param contact - A list of more ways to contact
 * @returns Contact component
 */
export default function Contact ({contacts}: {contacts: MoreContactAttr[]}): React.JSX.Element {
    const [mailSent, setMailSent]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const form: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
    const isValidEmail: React.MutableRefObject<boolean> = useRef(false);
    const isValidMessage: React.MutableRefObject<boolean> = useRef(false);

    function sendEmail (evnt: React.FormEvent): void {
        evnt.preventDefault();
        let timeout: number = 3000;
        if(!form || !form.current) return;
        const formelm: HTMLFormElement = form.current;
        let email: string = formelm.user_email.value;
        let message: string = formelm.message.value;
        isValidEmail.current = getValidEmail(email);
        isValidMessage.current = getValidMessage(message);

        if(isValidEmail.current && isValidMessage.current && !mailSent) {
            emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', form.current, 'gDDSsv52CVL0p2sKS')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    
            formelm.reset();
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
                <a id="contact" className="jump-to"></a>
                <h2>Contact</h2>
                <div className="contact-layout">
                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="name_form">
                            <label>Name
                                <input name="user_name" className="name_field" type="text" placeholder="Your name" />
                            </label>
                        </div>
                        <div className="email_form">
                            <label>Email
                                <input name="user_email" className="email_field" type="text" placeholder="Your email address" />
                            </label>
                        </div>
                        <div className="message_form">
                            <label>Message
                                <textarea name="message" className="message" placeholder="Enter your message"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="button">Send &rarr;</button>
                        {mailSent == true &&
                            <MailSubmit isValidEmail={isValidEmail.current} isValidMessage={isValidMessage.current} />
                        }
                    </form>
                    <div className="contact_info">
                        <h3>Other ways to connect with me.</h3>
                        {contacts.map((contact: MoreContactAttr, index: number) => (
                            <ContactItem key={index} {...contact} />
                        ))}
                    </div>
                </div>  
            </div>
        </section>
    );
}
