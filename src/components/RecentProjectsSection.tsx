import React from 'react';
import './RecentProjectsSection.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  date: string;
  link?: string;
}

const RecentProjectsSection: React.FC = () => {
 const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Dining Table',
    description: 'Hand-crafted oak dining table with traditional joinery',
    date: '2026-02-10',
    link: '#'
  },
  {
    id: 2,
    title: 'Kitchen Cabinets',
    description: 'Custom maple kitchen cabinets with soft-close hinges',
    date: '2026-01-15',
    link: '#'
  },
  {
    id: 3,
    title: 'Wooden Shelving Unit',
    description: 'Built-in walnut shelving with decorative details',
    date: '2025-12-20',
    link: '#'
  }
];

  return (
    <section className="recent-projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-date">{new Date(project.date).toLocaleDateString()}</p>
                {project.link && (
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;