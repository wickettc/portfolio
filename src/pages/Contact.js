import React, { useState } from 'react';
import Popup from '../components/Popup';
import '../css/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [fromName, setFromName] = useState('');
    const [returnEmail, setReturnEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

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
                    setPopupMessage('Thanks! I will get back to you ASAP!');
                    setShowPopup(true);
                    setFromName('');
                    setReturnEmail('');
                    setMessage('');
                    setSending(false);
                },
                (error) => {
                    setPopupMessage(
                        `Oops, something went wrong. Send me an email at wickettc@gmail.com instead please!`
                    );
                    setShowPopup(true);
                    setFromName('');
                    setReturnEmail('');
                    setMessage('');
                    setSending(false);
                }
            );
    }

    return (
        <div className="contact-container">
            {showPopup ? (
                <Popup message={popupMessage} setShowPopup={setShowPopup} />
            ) : null}
            <div className="contact-title-container">
                <h1 className="contact-title-header-1">
                    Want to get in{' '}
                    <span className="contact-title-colored">Contact</span>?
                </h1>
                <h2 className="contact-title-header-2">
                    Send <span className="contact-title-colored">me</span> a
                    Message{' '}
                    <span className="contact-arrow-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                        </svg>
                    </span>
                    <span className="contact-arrow-down">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 24l-8-9h6v-15h4v15h6z" />
                        </svg>
                    </span>
                </h2>
            </div>
            <div className="form-container">
                <form className="contact-form" onSubmit={sendFormEmail}>
                    <input
                        placeholder="What is your name?"
                        id="from_name"
                        name="from_name"
                        type="text"
                        value={fromName}
                        required
                        onChange={(e) => setFromName(e.target.value)}
                    />
                    <input
                        placeholder="What is your email?"
                        id="return_email"
                        name="return_email"
                        type="email"
                        value={returnEmail}
                        required
                        onChange={(e) => setReturnEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="How can I help you!?"
                        id="message"
                        name="message"
                        value={message}
                        rows="10"
                        cols="40"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    />
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
