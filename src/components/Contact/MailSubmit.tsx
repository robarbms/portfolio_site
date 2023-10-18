import React from 'react'

// Props for a mail submit component
export type MailSubmitProps = {
    isValidEmail: boolean,
    isValidMessage: boolean
}

/**
 * Confirmation popup when a mail is submitted
 * @param props - isValidEmail, isValidMessage 
 * @returns MailSubmit component
 */
export default function MailSubmit ({isValidEmail, isValidMessage}: MailSubmitProps): React.JSX.Element {
    let title: string = "Email sent!";
    let notification: string = "Thank you for your message. I will get back to you soon."
    let error: boolean = false;
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