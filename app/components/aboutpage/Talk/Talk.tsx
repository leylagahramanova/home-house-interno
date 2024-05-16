"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Talk.css'
import Image from 'next/image';
import vector from "@/app/img/Vector.png";
function Talk() {
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
    <div className="talk">
     <h2>Creative project? Lets have a productive talk.</h2> 
     <form ref={form} onSubmit={sendEmail}>
        <div className="content-form">
                    <div className="form-content">  <input className="input" name="user_name" type="text" placeholder="Name" />
                    <input className="input" name="user_email" type="email" placeholder="Email" />
                        </div>
               
                    <textarea name="message" placeholder="Hello I am Interested in..."></textarea>
                    <div className='cont-button'>
                        <button id="cont">
                            <a type="submit">Send Now</a> <Image src={vector} alt="" />
                        </button>
                    </div>
                    </div>
                </form>
    </div>
  )
}

export default Talk
