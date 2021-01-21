import React, { useState } from 'react';
import '../css/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [fromName, setFromName] = useState('');
    const [returnEmail, setReturnEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);

    function sendFormEmail(e) {
        e.preventDefault();
        setSending(true);
        emailjs
            .sendForm(
                'service_hjmr08k',
                'template_k17x5jj',
                e.target,
                'user_I68M45adhXsv5RWm6YpAO'
            )
            .then(
                (result) => {
                    alert('Thanks! I will get back to you ASAP!');
                    setFromName('');
                    setReturnEmail('');
                    setMessage('');
                    setSending(false);
                },
                (error) => {
                    console.log(error);
                    setFromName('');
                    setReturnEmail('');
                    setMessage('That did not work... Please try again later!');
                    setSending(false);
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
                    <label htmlFor="from_name">
                        {' '}
                        Name:
                        <input
                            placeholder="What is your name?"
                            id="from_name"
                            name="from_name"
                            type="text"
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="return_email">
                        Email:
                        <input
                            placeholder="How can I reach you?"
                            id="return_email"
                            name="return_email"
                            type="email"
                            value={returnEmail}
                            onChange={(e) => setReturnEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="message">
                        Body:
                        <textarea
                            placeholder="Give me some details"
                            id="message"
                            name="message"
                            value={message}
                            rows="15"
                            cols="40"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    {sending ? (
                        <div className="loader contact-loader"></div>
                    ) : (
                        <button>Send</button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
