import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple text-sm font-medium mb-6">
              Olá, sou Fábio Sousa
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-text-primary">Web Designer &</span>
            <br />
            <span className="gradient-text">Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transformo negócios locais em Famalicão e região em experiências digitais memoráveis.
            Websites profissionais que não só ficam bonitos, mas convertem
            visitantes em clientes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/portfolio" className="btn-gradient flex items-center space-x-2">
              <span>Ver Portfolio</span>
              <FiArrowRight />
            </Link>
            <Link to="/contacto" className="btn-outline">
              Vamos Conversar
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                5+
              </div>
              <div className="text-text-secondary text-sm">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-text-secondary text-sm">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                24h
              </div>
              <div className="text-text-secondary text-sm">Resposta</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-accent-purple rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-accent-purple rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
