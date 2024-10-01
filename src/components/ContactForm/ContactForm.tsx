import React, { useState } from 'react';
import "./ContactForm.css";

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required');
            return;
        }
        console.log({ name, email, message });
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
    };

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    Contact us
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button type="submit">Send</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </section>
    );

};

export default ContactForm;