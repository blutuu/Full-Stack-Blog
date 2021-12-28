import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Contact</h3>
      <form action="">
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" id="contact_email" cols="30" rows="10"></input>
        <label htmlFor="Email Content">Message</label>
        <input type="text" name="Email Content" id="contact_email-contact" cols="30" rows="10"></input>
        <input type="Submit" />
      </form>
    </div>
  )
}

export default ContactForm;
