import { useState, useEffect } from 'react';

function Navbar() {
  const links = [
    ['about', 'About'],
    ['projects', 'Projects'],
    ['contact', 'Contact'],
  ];
  return (
    <nav className="navbar">
      <span className="logo">YourName</span>
      <ul>
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I’m Your Name 👋</h1>
      <p>I’m a web developer who loves building clear, fast things for the internet.</p>
      <a href="#projects" className="btn">See my work</a>
    </section>
  );
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];

function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <p>
        I’m a student learning front-end development. I enjoy turning ideas into
        small, useful apps, and I’m currently getting deeper into React.
      </p>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">View project</a>
    </div>
  );
}

const projects = [
  { id: 1, title: 'Weather App', description: 'Shows live weather for any city using a public API.', link: '#' },
  { id: 2, title: 'Todo List', description: 'A simple task manager built with React state.', link: '#' },
  { id: 3, title: 'Recipe Finder', description: 'Search recipes and save your favourites.', link: '#' },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Want to work together? Send me an email.</p>
      <p className="socials">
        <a href="mailto:you@example.com">you@example.com</a>
        {'  ·  '}
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        {'  ·  '}
        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}

function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} Your Name</footer>;
}

function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Tell the CSS which theme is active
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={dark ? 'dark-text' : ''}>
      <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;