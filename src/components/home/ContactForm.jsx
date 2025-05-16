import React from 'react';
import books19Logo from "../../assets/images/books19.png";

function ContactForm() {
  return (
   <section className="contact-form" id="contact">
    <div>
      <h3>Contact Us</h3>
      <div> 
        <img src={books19Logo} alt="Books19" />
      </div>
    </div>
    <div>
      <form>
        <section>
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input type="text" id="fullname" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
        </section>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button>Send it!</button>
      </form>
    </div>
   </section>
  );
}

export default ContactForm;