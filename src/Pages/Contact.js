import React, { useState } from 'react'
import Footer from '../Layout/Component/Footer'
import NavBar from '../Layout/Component/NavBar'

import emailjs from 'emailjs-com'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (event) => {
      event.preventDefault();
        if (name && email && message) {
            const serviceId = 'service_sqar65l';
            const templateId = 'template_m2khduv';
            const userId = '57AEpdLend_UdaJk1';
            const templateParams = {
                name,
                email,
                message
            };
            
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));    

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
  
  return (
    <>
        <NavBar/>
        <div className="card-group p-5" style={{backgroundImage:`url(https://source.unsplash.com/1400x500/?contact)`}}>
          <div className="card p-5">
            <h1 className="display-4">Get in Touch!</h1>
            <div className="card-body">
              <p className="lead text-justify" ></p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="card p-5">
           <form onSubmit={submit}>
            <div className="form-group">
              <p className="lead text-left">Name</p>
              <input type="text" placeholder="Your Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
            <div className="form-group">
               <p className="lead text-left">Email</p>
               <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div> 
            <div className="form-group">
              <p className="lead text-left">Your Feedback</p>
              <textarea className="form-control" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
           </form><br/>
           {emailSent?<p className="lead text-center">We have received your email, We'll get back to you soon!</p>:<p></p>}
          </div>
        </div>
 
        <Footer/>
    </>
  )
}

export default Contact