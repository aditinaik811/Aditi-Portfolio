import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import './Contact.css'
export default function Contact() {
  return (
   
    <div className="contact-page-container">
      <div className="contact-left">
        <h2>Contact Details</h2>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+8618106340">8618106340</a>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:aditinaik811@gmail.com">aditinaik@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="contact-item">
          <FaFacebook className="contact-icon" />
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <div className="contact-right">
        <h2>DM</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
