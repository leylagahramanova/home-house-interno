"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";
import mail from '@/app/img/mail.png';
import phone from '@/app/img/phone.png';
import earth from '@/app/img/earth.png';
import Image from 'next/image';
import vector from "@/app/img/Vector.png";

import '@/app/components/button.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contacts() {
    // Properly type the ref object to be an HTMLFormElement or null initially.
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make sure form.current is not null before calling sendForm.
        if (form.current) {
            emailjs
                .sendForm('service_4t2ddtt', 'template_1br93re', form.current, 'cGZORiRq9dQog-bA6')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div className="cont">
            <h2>We love meeting new people and helping them.</h2>
            <div className="contact">
                <div className="contact-card">
                    <div className="vertical">
                        <ul>
                            <li><Image src={mail} alt="Email Icon" /><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                            <li><Image src={phone} alt="Phone Icon" /><a href="tel:+13784001234">+1 (378) 400-1234</a></li>
                            <li><Image src={earth} alt="Website Icon" /><a href="http://www.yourdomain.com">www.yourdomain.com</a></li>
                        </ul>
                    </div>
                    <div className="horisontal">
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-content">  <input className="input" name="user_name" type="text" placeholder="Name" />
                        <input className="input" name="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="form-content">
                        <input className="input" name="user_email" type="email" placeholder="Email" />
                        <input className="input" name="phone" type="tel" placeholder="Phone" />
                    </div>
                    <textarea name="message" placeholder="Hello I am Interested in..."></textarea>
                    <div className='contt-button'>
                        <button>
                            <a type="submit">Send Now</a> <Image src={vector} alt="" />
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Contacts;