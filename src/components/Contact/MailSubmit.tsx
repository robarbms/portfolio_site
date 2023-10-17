import React from 'react'

export type MailSubmitArgs = {
    isValidEmail: boolean,
    isValidMessage: boolean
}

export default function MailSubmit ({isValidEmail, isValidMessage}: MailSubmitArgs) {
    let title = "Email sent!";
    let notification = "Thank you for your message. I will get back to you soon."
    let error = false;
    if (!isValidEmail || !isValidMessage) {
        error = true;
        title = "Error sending message!"
        if (!isValidEmail && !isValidMessage) {
            notification = "Can't send mail without a valid email address and a message."
        }
        else if (!isValidMessage) {
            notification = "Can't send mail withou a message."
        }
        else {
            notification = "Can't send your message without a valid email address."
        }
    }
    return (
        <div className="contact_confirm {error ? ' mail_error' : ''}">
            <h2>{title}</h2>
            <p>{notification}</p>
        </div>
    )
}