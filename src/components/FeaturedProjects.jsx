import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import ProjectCard from './ProjectCard'
import ScrollAnimation from './ScrollAnimation'

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: 'Barbershop Demo',
      description: 'Website moderno para barbearia com sistema de agendamento online, galeria de serviços e integração WhatsApp.',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
      link: 'https://barbershop-demo-navy.vercel.app/',
      tech: ['React', 'Tailwind', 'Framer Motion'],
    },
    {
      title: 'Mesa Portuguesa',
      description: 'Plataforma de restaurante português com menu digital, sistema de reservas e apresentação de pratos tradicionais.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      link: 'https://mesa-portuguesa.vercel.app/',
      tech: ['Next.js', 'Tailwind', 'React'],
    },
    {
      title: 'Coach Fitness PT',
      description: 'Website para personal trainer com planos de treino, calculadora de IMC e área de agendamento de sessões.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      link: 'https://coach-fitness-pt.vercel.app/',
      tech: ['React', 'Tailwind', 'Vite'],
    },
  ]

  return (
    <section className="section-container">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi. Cada website é único e
            criado para atender as necessidades específicas de cada negócio.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 0.1} />
        ))}
      </div>

      <ScrollAnimation delay={0.4}>
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-accent-purple hover:text-accent-purple-dark font-semibold transition-colors group"
          >
            <span>Ver Todos os Projetos</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default FeaturedProjects
