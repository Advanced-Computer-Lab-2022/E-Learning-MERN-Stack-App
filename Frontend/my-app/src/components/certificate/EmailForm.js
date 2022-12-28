import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import UserInfoContext from '../../context/UserInfoContext'
const EmailForm = ({ user, courseObj }) => {
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
    const user_email = user.email;
    const subject = "| " + courseObj.title;
    const message = user.firstName + " " + user.lastName + "\n"
        + "has successfully completed \n"
        + courseObj.title + "\n"
        + "an online non-credit course authorized by " + courseObj.instructor.name + " and offered through ACL"
    return (
        <section>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className='hidden' name="user_email" required value={user_email} />
                <input type="text" className='hidden' name="subject" required value={subject} />
                <textarea type="text" className='hidden' name="message" required value={message} />
                <button type='submit'
                    className='self-center rounded-lg bg-blue-500 text-center mt-10 mx-96 py-5 text-white text-4xl font-extrabold cursor-pointer flex felx-row hover:bg-blue-700'
                >
                    <span className='px-4'>Email Certificate</span>
                </button>
            </form>
        </section >
    )
}

export default EmailForm