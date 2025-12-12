import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/ProjectCard'
import ScrollAnimation from '../components/ScrollAnimation'

const Portfolio = () => {
  const projects = [
    {
      title: 'Nexora News',
      description: '🔥 PROJETO AVANÇADO - Portal de notícias tech com IA. Sistema automático de geração de conteúdo usando Gemini AI, integração Unsplash API para imagens, categorias dinâmicas e arquitectura Next.js completa. Demonstra capacidade técnica avançada.',
      image: '/projects/nexora-news.webp',
      imageFallback: '/projects/nexora-news.png',
      link: 'https://nexoranews.vercel.app/',
      tech: ['Next.js', 'Gemini AI', 'Unsplash API', 'React'],
    },
    {
      title: 'Barbershop Demo',
      description: 'Website moderno para barbearia com sistema de agendamento online, galeria de serviços e integração WhatsApp. Design minimalista com foco em conversão.',
      image: '/projects/barbershop.webp',
      imageFallback: '/projects/barbershop.png',
      link: 'https://barbershop-demo-navy.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Mesa Portuguesa',
      description: 'Plataforma completa para restaurante português com menu digital interativo, sistema de reservas online e apresentação elegante de pratos tradicionais.',
      image: '/projects/mesa-portuguesa.webp',
      imageFallback: '/projects/mesa-portuguesa.png',
      link: 'https://mesa-portuguesa.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
    },
    {
      title: 'Coach Fitness PT',
      description: 'Website profissional para personal trainer com planos de treino personalizados, calculadora de IMC e área de agendamento de sessões online.',
      image: '/projects/coach-fitness.webp',
      imageFallback: '/projects/coach-fitness.png',
      link: 'https://coach-fitness-pt.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Bella Salon',
      description: 'Website elegante para salão de beleza com galeria de serviços, sistema de marcação online e integração com redes sociais para máxima visibilidade.',
      image: '/projects/bella-salon.webp',
      imageFallback: '/projects/bella-salon.png',
      link: 'https://salon-bella-demo.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'Vite'],
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
