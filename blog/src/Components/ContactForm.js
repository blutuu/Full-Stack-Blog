import React from 'react';
import styled from 'styled-components';

const FormContact = styled.form`
  > * {
    color: white;
    display: block; 
  }
  > textarea {
    width: 330px;
    margin: .5rem 0 1rem;
    border-radius: .45rem;
    color: black;
    resize: none;
  }
  [type="Submit"] {
    width: 117px;
    height: 29px;
    border: none;
    border-radius: .45rem;
    color: black;
  }
`;

const MidHeader = styled.h3`
  margin-bottom: 0rem;
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
`;

const ContactForm = () => {
  return (
    <div className="contact-form">
      <MidHeader>Contact</MidHeader>
      <FormContact>
        <label htmlFor="Email">Email</label>
        <textarea type="text" name="Email" id="contact_email" cols="30" rows="1"></textarea>
        <label htmlFor="Email Content">Message</label>
        <textarea type="text" name="Email Content" id="contact_message" rows="5"></textarea>  
        <input type="Submit" value="Send"/>
      </FormContact>
    </div>
  )
}

export default ContactForm;
