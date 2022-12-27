import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const EmailForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_su0i9fc', 'template_bavkj6f', form.current, '5-LwePn8zXOpLz6ff')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section>
            <form ref={form} onSubmit={sendEmail}>
                <h2> mail </h2>
                <input type="text" placeholder="uemail" name="user_email" required />
                <input type="text" placeholder="subject" name="subject" required />
                <input type="text" placeholder="message" name="message" required />
                <button type='submit'> Send Message  </button>
            </form>
        </section >
    )
}

export default EmailForm