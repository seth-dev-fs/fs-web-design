import { FiExternalLink } from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <ScrollAnimation delay={delay}>
      <div className="card-hover overflow-hidden group">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-accent-purple/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient flex items-center space-x-2"
            >
              <span>Ver Projeto</span>
              <FiExternalLink />
            </a>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-purple transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-bg-tertiary text-accent-purple text-xs font-medium rounded-full border border-accent-purple/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ProjectCard
