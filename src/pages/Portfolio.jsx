import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/ProjectCard'
import ScrollAnimation from '../components/ScrollAnimation'

const Portfolio = () => {
  const projects = [
    {
      title: 'Barbershop Demo',
      description: 'Website moderno para barbearia com sistema de agendamento online, galeria de serviços e integração WhatsApp. Design minimalista com foco em conversão.',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
      link: 'https://barbershop-demo-navy.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Mesa Portuguesa',
      description: 'Plataforma completa para restaurante português com menu digital interativo, sistema de reservas online e apresentação elegante de pratos tradicionais.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      link: 'https://mesa-portuguesa.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
    },
    {
      title: 'Coach Fitness PT',
      description: 'Website profissional para personal trainer com planos de treino personalizados, calculadora de IMC e área de agendamento de sessões online.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      link: 'https://coach-fitness-pt.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Bella Salon',
      description: 'Website elegante para salão de beleza com galeria de serviços, sistema de marcação online e integração com redes sociais para máxima visibilidade.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      link: '#',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
    },
    {
      title: 'Projeto Futuro',
      description: 'Espaço reservado para o próximo projeto incrível. Especializado em websites para pequenos negócios locais que querem destacar-se online.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      link: '#',
      tech: ['Em Breve'],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Portfolio | FS Web Design - Projetos de Web Design</title>
        <meta
          name="description"
          content="Veja o portfolio completo de Fábio Sousa. Projetos de web design para barbearias, restaurantes, fitness, salões e mais. React, Next.js, Tailwind CSS."
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/portfolio" />
      </Helmet>

      <section className="section-container pt-32">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Portfolio de <span className="gradient-text">Projetos</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Uma seleção dos meus trabalhos mais recentes. Cada projeto é único
              e desenvolvido com tecnologias modernas para garantir performance e
              resultados.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.1} />
          ))}
        </div>

        <ScrollAnimation delay={0.6}>
          <div className="mt-16 text-center card-hover max-w-2xl mx-auto py-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-text-secondary mb-6">
              Vamos criar algo incrível juntos. Entre em contacto para discutir o
              seu projeto.
            </p>
            <a href="/contacto" className="btn-gradient">
              Iniciar Projeto
            </a>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Portfolio
