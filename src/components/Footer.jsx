import { Link } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold gradient-text">FS</span>
              <span className="text-lg font-semibold text-text-primary">
                Web Design
              </span>
            </Link>
            <p className="text-text-secondary text-sm">
              Transformando negócios locais em experiências digitais memoráveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-accent-purple transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-text-secondary hover:text-accent-purple transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-text-secondary hover:text-accent-purple transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-text-secondary hover:text-accent-purple transition-colors text-sm">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>Landing Pages</li>
              <li>Websites Completos</li>
              <li>E-commerce</li>
              <li>Web Applications</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/351912004595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm flex items-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>+351 912 004 595</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:seth_dev_fs@proton.me"
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm flex items-center space-x-2"
                >
                  <FaEnvelope />
                  <span>seth_dev_fs@proton.me</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/seth_dev_fs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm flex items-center space-x-2"
                >
                  <FaInstagram />
                  <span>@fs_webdesigner</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © {currentYear} FS Web Design. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-sm">
            Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
