import React, { useState } from 'react';
import '../css/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [sendName, setSendName] = useState('');
    const [sendEmail, setSendEmail] = useState('');
    const [sendBody, setSendBody] = useState('');

    function sendFormEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_hjmr08k',
                'template_k17x5jj',
                e.target,
                'user_I68M45adhXsv5RWm6YpAO'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className="contact-container">
            <div className="contact-title-container">
                <h1 className="contact-title-header-1">
                    Want to get in{' '}
                    <span className="contact-title-colored">Contact</span>?
                </h1>
                <h2 className="contact-title-header-2">
                    Send <span className="contact-title-colored">me</span> a
                    Message ---{'>'}
                </h2>
            </div>
            <div className="form-container">
                <form className="contact-form" onSubmit={sendFormEmail}>
                    <label htmlFor="send-name">
                        {' '}
                        Name:
                        <input
                            placeholder="What is your name?"
                            id="send-subject"
                            type="text"
                            value={sendName}
                            onChange={(e) => setSendName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="send-email">
                        Email:
                        <input
                            placeholder="How can I reach you?"
                            id="send-email"
                            type="email"
                            value={sendEmail}
                            onChange={(e) => setSendEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="send-body">
                        Body:
                        <textarea
                            placeholder="Give me some details"
                            id="send-body"
                            value={sendBody}
                            rows="15"
                            cols="40"
                            onChange={(e) => setSendBody(e.target.value)}
                        />
                    </label>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
