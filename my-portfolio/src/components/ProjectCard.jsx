function ProjectCard({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">View project →</a>
    </div>
  );
}

export default ProjectCard;