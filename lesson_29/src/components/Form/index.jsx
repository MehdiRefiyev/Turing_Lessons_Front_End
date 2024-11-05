import React, { useState } from 'react'
import '../Form/Form.css'

export default function index() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);


    const handleSubmit = (event) => {

        event.preventDefault();

        setIsOpen(!isOpen);

    }


    return (
        <>
            {isOpen ?
                <div>
                    <ul>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{message}</li>
                    </ul>
                </div>
                :
                <form className='form-div' onSubmit={handleSubmit}>
                    <label htmlFor='userName'>
                        Name:
                    </label>
                    <input type="text" placeholder='Name' id="userName" required onChange={(e) => setName(e.target.value)} />

                    <label htmlFor='userEmail'>
                        Email:
                    </label>
                    <input type="email" placeholder='randomName@gmail.com' id="userEmail" required onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor='userMessage'>
                        Message:
                    </label>

                    <textarea id='userMessage' name="message" rows={4} cols={40} onChange={(e) => setMessage(e.target.value)} />

                    <input type='submit' className='subBtn' value="Submit"/>
                </form>
            }

        </>

    )
}
