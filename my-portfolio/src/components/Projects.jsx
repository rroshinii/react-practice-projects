import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Shows live weather using a public API.',
    link: 'https://github.com/yourname/weather-app',
  },
  {
    id: 2,
    title: 'Todo List',
    description: 'A simple task manager built with React.',
    link: 'https://github.com/yourname/todo',
  },
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

export default Projects;