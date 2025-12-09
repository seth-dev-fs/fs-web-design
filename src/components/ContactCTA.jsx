import { Link } from 'react-router-dom'
import { FiMail, FiArrowRight } from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'

const ContactCTA = () => {
  return (
    <section className="section-container">
      <ScrollAnimation>
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-gold opacity-10" />

          {/* Content */}
          <div className="relative z-10 card border-accent-purple/50 text-center py-16 px-8">
            <FiMail className="text-5xl text-accent-purple mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Pronto para começar o seu projeto?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8 text-lg">
              Entre em contacto hoje e vamos transformar a sua visão digital em
              realidade. Respondo em menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="btn-gradient flex items-center space-x-2"
              >
                <span>Falar Comigo</span>
                <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/351912004595"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Direto
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default ContactCTA
