import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/contact.css';
import emailjs from "@emailjs/browser";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }
    render() {
        
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_8ej6il4', 'template_0q3sujl', this.form.current, 'gDDSsv52CVL0p2sKS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
        
        return(
            <section className="contact">
                <div className="center">
                    <a name="contact" className="jump-to"></a>
                    <h2>Contact</h2>
                    <div className="contact-layout">
                        <form className="contact_form" ref={this.form} onSubmit={sendEmail}>
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
                            <div className="contact_info_item">
                                <label>Email:</label> <a href="mailto:rob@robjamesbarber.com">rob@robjamesbarber.com</a>
                            </div>
                            <div className="contact_info_item">
                                <label>LinkedIn:</label> <a href="https://www.linkedin.com/in/rob-barber-4a05b83/" target="_blank">Profile</a>
                            </div>
                            <div className="contact_info_item">
                                <label>Github:</label> <a href="https://github.com/robarbms" target="_blank">robarbms</a>
                            </div>
                            <div className="contact_info_item">
                                <label>Codepen:</label> <a href="https://codepen.io/kungfukarl" target="_blank">kungfukarl</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
      // Map the required state properties here
    };
  };
  
  export default connect(mapStateToProps)(Contact);
  