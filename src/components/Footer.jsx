import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className="footer-top">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>EduPress</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore
              magna aliqua.
            </p>
          </div>

          <div className="footer-col">
            <h4>GET HELP</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><Link to="/blog">Latest Articles</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>PROGRAMS</h4>
            <ul>
              <li><Link to="/courses">Art &amp; Design</Link></li>
              <li><Link to="/courses" className="active">Business</Link></li>
              <li><Link to="/courses">IT &amp; Software</Link></li>
              <li><Link to="/courses">Languages</Link></li>
              <li><Link to="/courses">Programming</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US</h4>
            <p>Address: 2221 New Design St, Hudson Yards, USA</p>
            <div className="footer-contact-lines">
              <p>Tel: + (123) 2500-567-8988</p>
              <p>Mail: supportlms@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-bottom">
        <p>
          Copyright © 2024 <span>EduPress LMS</span> | Powered by ThimPress
        </p>
      </footer>
    </>
  );
}