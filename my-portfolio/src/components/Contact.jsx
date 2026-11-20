function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Want to work together? Reach out!</p>
      <a className="btn" href="mailto:you@example.com">Email me</a>
      <p className="socials">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        {' · '}
        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}

export default Contact;