import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/contact.css';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class ContactItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, text, link, icon, iconType} = this.props;
        return(
            <div className="contact-item">
                <a href={link}>
                    {iconType == "fontawesome" ? <FontAwesomeIcon icon={icon} /> : <i className={"devicon " + icon}></i>}
                    <span className="contact-title">{title}: </span>
                    <span className="contact-text">{text}</span>
                </a>
            </div>
        )
    }
}

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.sendEmail = this.sendEmail.bind(this);

        this.more_contact = [
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
                text: "Profile",
                link: "https://www.linkedin.com/in/rob-barber-4a05b83/",
                icon: "devicon-linkedin-plain",
                iconType: "devicon"
            }
        ]
    }
    sendEmail(evnt) {
        e.preventDefault();
      
        emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', this.form.current, 'gDDSsv52CVL0p2sKS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    render() {
        return(
            <section className="contact">
                <div className="center">
                    <a name="contact" className="jump-to"></a>
                    <h2>Contact</h2>
                    <div className="contact-layout">
                        <form className="contact_form" ref={this.form} onSubmit={this.sendEmail}>
                            <div className="name_form">
                                <label>Name</label>
                                <input name="user_name" className="name_field" type="text" placeholder="Your name" />
                            </div>
                            <div className="email_form">
                                <label>Email</label>
                                <input name="user_name" className="email_field" type="text" placeholder="Your email address" />
                            </div>
                            <div className="message_form">
                                <label>Message</label>
                                <textarea name="message" className="message" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" class="button">Send &rarr;</button>
                        </form>
                        <div className="contact_info">
                            <h3>Other ways to connect with me.</h3>
                            {this.more_contact.map((contact, index) => (
                                <ContactItem key={index} {...contact} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
