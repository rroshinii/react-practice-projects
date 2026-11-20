const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Write 2–3 sentences about yourself: where you study or work,
        what you enjoy, and what you're learning.
      </p>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;