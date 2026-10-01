function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-content">

        <p className="contact-label">
          LET'S CONNECT
        </p>

        <h2>
          Find something
          <span>made for you.</span>
        </h2>

        <p className="contact-description">
          Have a question about our collection or looking
          for something special? We'd love to hear from you.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:hello@dollyboutique.com"
            className="contact-primary"
          >
            Get in Touch →
          </a>

          <a
            href="#collections"
            className="contact-secondary"
          >
            Explore Collection
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;