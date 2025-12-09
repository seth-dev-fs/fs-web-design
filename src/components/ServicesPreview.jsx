import { Link } from 'react-router-dom'
import { FiCode, FiLayers, FiZap } from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'

const ServicesPreview = () => {
  const services = [
    {
      icon: <FiZap className="text-4xl" />,
      title: 'Landing Pages',
      description: 'Páginas otimizadas para conversão, perfeitas para campanhas e captação de leads.',
      price: 'A partir de €250',
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: 'Website Completo',
      description: 'Website multi-página com design personalizado e funcionalidades avançadas.',
      price: 'A partir de €350',
    },
    {
      icon: <FiCode className="text-4xl" />,
      title: 'Soluções Premium',
      description: 'E-commerce, aplicações web e integrações personalizadas para o seu negócio.',
      price: 'A partir de €600',
    },
  ]

  return (
    <section className="section-container bg-bg-secondary/50">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Serviços <span className="gradient-text">Profissionais</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Soluções completas de web design adaptadas às necessidades do seu
            negócio. Do conceito ao lançamento.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div className="card-hover text-center space-y-4 h-full flex flex-col">
              <div className="text-accent-purple mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="text-accent-gold font-bold text-lg pt-4">
                {service.price}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation delay={0.4}>
        <div className="text-center">
          <Link to="/servicos" className="btn-gradient">
            Ver Todos os Serviços
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default ServicesPreview
